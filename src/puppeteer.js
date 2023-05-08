const path = require("path");
const fs = require("fs");
const puppeteer = require("puppeteer");

async function savePDF() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  await page.goto(`http://localhost:3000`, { waitUntil: "networkidle0" });
  const pdf = await page.pdf({ format: "Letter" });

  await browser.close();

  fs.writeFileSync(path.resolve(__dirname, "../out/report.pdf"), pdf);
}

module.exports = savePDF;
