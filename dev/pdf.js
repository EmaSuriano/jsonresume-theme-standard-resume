const puppeteer = require('puppeteer');
const fs = require('fs');
const btoa = require('btoa');
const resumeJson = require('./resume.json');

const themePkg = require('..');

const createPdf = (callback) => {
  (async () => {
    const html = themePkg.render(resumeJson);
    const puppeteerLaunchArgs = [];

    if (process.env.RESUME_PUPPETEER_NO_SANDBOX) {
      puppeteerLaunchArgs.push('--no-sandbox');
    }

    const browser = await puppeteer.launch({
      args: puppeteerLaunchArgs,
    });
    const page = await browser.newPage();

    await page.emulateMedia(
      (themePkg.pdfRenderOptions && themePkg.pdfRenderOptions.mediaType) ||
        'screen',
    );
    await page.goto(
      `data:text/html;base64,${btoa(unescape(encodeURIComponent(html)))}`,
      { waitUntil: 'networkidle0' },
    );
    await page.pdf({
      path: 'resume.pdf',
      format: 'Letter',
      printBackground: true,
      ...themePkg.pdfRenderOptions,
    });

    await browser.close();
  })().then(callback);
};

createPdf(() => {
  fs.renameSync('resume.pdf', 'dev/resume.pdf');
  console.log('Done Pdf');
});
