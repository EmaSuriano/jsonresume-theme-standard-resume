import fs from 'fs';
import puppeteer from 'puppeteer';
import resumeJson from '../resume.json';
import theme from '..';

const asyncStreamWrite = (path: string, content: string) => {
  const stream = fs.createWriteStream(path);

  return new Promise((resolve, reject) => {
    stream.write(content, function (error) {
      if (error) {
        reject(error);
      }
      stream.close(resolve);
    });
  });
};

export const generateHtml = async (path: string) => {
  const html = theme.render(resumeJson);
  await asyncStreamWrite(path, html);

  return html;
};

export const generatePdf = async (path: string) => {
  const html = theme.render(resumeJson);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pdf = await page.pdf({ path, format: 'Letter', printBackground: true });
  await browser.close();

  return pdf;
};
