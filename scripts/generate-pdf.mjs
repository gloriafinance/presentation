import { access, mkdir } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";

const PORT = 4173;
const URL = `http://127.0.0.1:${PORT}/?print=1`;
const OUTPUT_DIR = path.resolve("dist");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "gloria-finance-apresentacao.pdf");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function exists(filePath) {
  try {
    await access(filePath, constants.X_OK);
    return true;
  } catch {
    return false;
  }
}

function findOnPath(command) {
  const checker = process.platform === "win32" ? "where" : "which";
  const result = spawnSync(checker, [command], { encoding: "utf-8" });
  if (result.status !== 0) return null;
  return result.stdout.split(/\r?\n/).find(Boolean) ?? null;
}

async function findBrowser() {
  const envBrowser = process.env.CHROME_PATH;
  if (envBrowser && await exists(envBrowser)) return envBrowser;

  const knownPaths = process.platform === "darwin"
    ? [
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
        "/Applications/Chromium.app/Contents/MacOS/Chromium",
      ]
    : process.platform === "win32"
      ? [
          `${process.env.PROGRAMFILES ?? "C:\\Program Files"}\\Google\\Chrome\\Application\\chrome.exe`,
          `${process.env["PROGRAMFILES(X86)"] ?? "C:\\Program Files (x86)"}\\Google\\Chrome\\Application\\chrome.exe`,
          `${process.env.LOCALAPPDATA ?? ""}\\Google\\Chrome\\Application\\chrome.exe`,
        ]
      : [
          "/usr/bin/google-chrome",
          "/usr/bin/google-chrome-stable",
          "/usr/bin/chromium",
          "/usr/bin/chromium-browser",
        ];

  for (const candidate of knownPaths) {
    if (candidate && await exists(candidate)) return candidate;
  }

  for (const command of ["google-chrome", "google-chrome-stable", "chromium", "chromium-browser", "chrome"]) {
    const resolved = findOnPath(command);
    if (resolved) return resolved;
  }

  throw new Error(
    "Chrome/Chromium não encontrado. Instale Google Chrome ou defina CHROME_PATH com o caminho do executável.",
  );
}

async function waitForServer() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(URL);
      if (response.ok) return;
    } catch {
      // Vite is still starting.
    }
    await sleep(250);
  }

  throw new Error("O servidor Vite não iniciou a tempo.");
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });
  const browser = await findBrowser();

  const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
  const server = spawn(
    npmCommand,
    ["run", "dev", "--", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
    { stdio: "ignore" },
  );

  try {
    await waitForServer();

    const args = [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-pdf-header-footer",
      `--print-to-pdf=${OUTPUT_FILE}`,
      URL,
    ];

    const result = spawnSync(browser, args, { stdio: "inherit" });
    if (result.status !== 0) {
      throw new Error(`Chrome encerrou com código ${result.status ?? "desconhecido"}.`);
    }

    console.log(`\nPDF gerado: ${OUTPUT_FILE}`);
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((error) => {
  console.error(`\nErro ao gerar PDF: ${error.message}`);
  process.exit(1);
});
