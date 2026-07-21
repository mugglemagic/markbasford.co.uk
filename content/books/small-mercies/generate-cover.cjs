const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const BOOK_DIR = '/Users/mark-new/Code/markbasford/content/books/small-mercies';
const COVER_DIR = path.join(BOOK_DIR, 'images', 'cover');
const SOURCE = path.join(COVER_DIR, 'Gemini_Generated_Image_gvozkagvozkagvoz~2.jpg');
const FONT_DIR = path.join(BOOK_DIR, 'fonts');
const OUTPUT = path.join(COVER_DIR, 'cover-1600x2560.jpg');

const sourceB64 = fs.readFileSync(SOURCE).toString('base64');
const fontBoldB64 = fs.readFileSync(path.join(FONT_DIR, 'GeistMono-Bold.ttf')).toString('base64');
const fontMedB64 = fs.readFileSync(path.join(FONT_DIR, 'GeistMono-Medium.ttf')).toString('base64');
const fontLightB64 = fs.readFileSync(path.join(FONT_DIR, 'GeistMono-Light.ttf')).toString('base64');

const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"><style>
@font-face { font-family: 'Geist Mono'; font-weight: 700; src: url(data:font/ttf;base64,${fontBoldB64}) format('truetype'); }
@font-face { font-family: 'Geist Mono'; font-weight: 500; src: url(data:font/ttf;base64,${fontMedB64}) format('truetype'); }
@font-face { font-family: 'Geist Mono'; font-weight: 300; src: url(data:font/ttf;base64,${fontLightB64}) format('truetype'); }
* { box-sizing: border-box; margin: 0; padding: 0; }
html, body { width: 1600px; height: 2560px; overflow: hidden; }
body { display: flex; flex-direction: column; font-family: 'Geist Mono', monospace; color: #1a1a2e; }
.top { flex: 0 0 483px; padding: 230px 110px 0; display: flex; flex-direction: column; gap: 38px; }
.title { font-weight: 700; font-size: 180px; line-height: 0.92; letter-spacing: 0; white-space: nowrap; }
.subtitle { font-weight: 300; font-size: 45px; line-height: 1.35; max-width: 1380px; letter-spacing: -0.5px; }
.middle { flex: 0 0 1594px; }
.middle img { width: 1600px; height: 1594px; display: block; }
.bottom { flex: 0 0 483px; padding: 0 110px 230px; display: flex; align-items: flex-end; justify-content: flex-start; }
.author { font-weight: 500; font-size: 60px; letter-spacing: -1.5px; }
</style></head>
<body>
<div class="top">
  <div class="title">Small Mercies</div>
  <div class="subtitle">Microinteractions, Perspective, and the Frontend Craft of Making People Feel Good</div>
</div>
<div class="middle"><img id="art" src="data:image/jpeg;base64,${sourceB64}" /></div>
<div class="bottom">
  <div class="author">Mark Basford</div>
</div>
</body></html>`;

(async () => {
  const browser = await puppeteer.launch({
    defaultViewport: { width: 1600, height: 2560, deviceScaleFactor: 1 }
  });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });

  const bgColor = await page.evaluate(() => new Promise((resolve) => {
    const img = document.getElementById('art');
    const sample = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const samples = [
        ctx.getImageData(8, 8, 1, 1).data,
        ctx.getImageData(img.naturalWidth - 8, 8, 1, 1).data,
        ctx.getImageData(8, img.naturalHeight - 8, 1, 1).data,
        ctx.getImageData(img.naturalWidth - 8, img.naturalHeight - 8, 1, 1).data,
      ];
      const r = Math.round(samples.reduce((s, p) => s + p[0], 0) / samples.length);
      const g = Math.round(samples.reduce((s, p) => s + p[1], 0) / samples.length);
      const b = Math.round(samples.reduce((s, p) => s + p[2], 0) / samples.length);
      resolve(`rgb(${r}, ${g}, ${b})`);
    };
    if (img.complete && img.naturalWidth > 0) sample();
    else img.onload = sample;
  }));

  await page.evaluate((color) => {
    document.body.style.backgroundColor = color;
  }, bgColor);

  console.log('Sampled background colour:', bgColor);

  await page.screenshot({
    path: OUTPUT,
    type: 'jpeg',
    quality: 92,
    clip: { x: 0, y: 0, width: 1600, height: 2560 }
  });

  await browser.close();
  console.log('Wrote', OUTPUT);
})();
