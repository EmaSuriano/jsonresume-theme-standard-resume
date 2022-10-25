import { generateHtml, generatePdf } from './generators';
import fs from 'fs';
import path from 'path';

const PUBLIC_FOLDER = path.join(__dirname, '..', 'public');

const main = async () => {
  if (!fs.existsSync(PUBLIC_FOLDER)) {
    fs.mkdirSync(PUBLIC_FOLDER);
  }

  await generateHtml(path.join(PUBLIC_FOLDER, 'index.html'));
  await generatePdf(path.join(PUBLIC_FOLDER, 'index.pdf'));
};

main();
