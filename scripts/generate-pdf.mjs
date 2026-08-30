import { access, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { constants } from "node:fs";
import { spawn, spawnSync } from "node:child_process";
import path from "node:path";
import process from "node:process";
import { PDFDocument } from "pdf-lib";
import puppeteer from "puppeteer-core";

const PORT = 4173;
const TOTAL_SLIDES = 7;
const BASE_URL = `http://127.0.0.1:${PORT}/?print=1`;
const OUTPUT_DIR = path.resolve("dist");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "gloria-finance-apresentacao.pdf");
const PAGES_DIR = path.join(OUTPUT_DIR, ".pdf-pages");

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
      const response = await fetch(BASE_URL);
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
  const build = spawnSync(npmCommand, ["run", "build"], { stdio: "inherit" });
  if (build.status !== 0) {
    throw new Error(`O build de produção encerrou com código ${build.status ?? "desconhecido"}.`);
  }

  await mkdir(PAGES_DIR, { recursive: true });

  const server = spawn(
    npmCommand,
    ["run", "preview", "--", "--host", "127.0.0.1", "--port", String(PORT), "--strictPort"],
    { stdio: "ignore" },
  );

  try {
    await waitForServer();

    const pageFiles = [];
    for (let slide = 0; slide < TOTAL_SLIDES; slide += 1) {
      const pageFile = path.join(PAGES_DIR, `slide-${slide + 1}.jpg`);
      const captureBrowser = await puppeteer.launch({
        executablePath: browser,
        headless: true,
        args: ["--hide-scrollbars"],
      });

      try {
        const page = await captureBrowser.newPage();

        try {
          await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 2 });
          await page.goto(`${BASE_URL}&slide=${slide}`, { waitUntil: "networkidle0" });
          await page.evaluate(() => document.fonts.ready);
          await page.bringToFront();
          await page.waitForFunction(() => {
            const logo = document.querySelector(".header-logo");
            const footer = document.querySelector(".nav-brand-text");
            return logo instanceof HTMLImageElement
              && logo.complete
              && logo.naturalWidth > 0
              && footer instanceof HTMLElement
              && footer.offsetWidth > 0;
          });
          await page.evaluate(() => new Promise((resolve) => {
            requestAnimationFrame(() => requestAnimationFrame(resolve));
          }));
          await new Promise((resolve) => setTimeout(resolve, 150));
          await page.evaluate(() => window.scrollTo(0, 0));
          await page.screenshot({
            path: pageFile,
            type: "jpeg",
            quality: 96,
            fullPage: true,
          });
          pageFiles.push(pageFile);
        } finally {
          await page.close();
        }
      } finally {
        await captureBrowser.close();
      }
    }

    const mergedPdf = await PDFDocument.create();
    mergedPdf.setTitle("Glória Finance — Apresentação Comercial");
    mergedPdf.setAuthor("Glória Finance");
    mergedPdf.setCreator("Glória Finance PDF Generator");
    mergedPdf.setProducer("pdf-lib");

    for (const pageFile of pageFiles) {
      const image = await mergedPdf.embedJpg(await readFile(pageFile));
      const page = mergedPdf.addPage([960, 540]);
      page.drawImage(image, { x: 0, y: 0, width: 960, height: 540 });
    }

    await writeFile(OUTPUT_FILE, await mergedPdf.save({ useObjectStreams: false }));
    console.log(`\nPDF gerado: ${OUTPUT_FILE}`);
  } finally {
    server.kill("SIGTERM");
    if (process.env.KEEP_PDF_PAGES !== "1") {
      await rm(PAGES_DIR, { recursive: true, force: true });
    }
  }
}

main().catch((error) => {
  console.error(`\nErro ao gerar PDF: ${error.message}`);
  process.exit(1);
});
