import { generateHtml, generatePdf } from './generators';
import path from 'path';

const DIST_FOLDER = path.join(__dirname, '..', 'dist');

const main = async () => {
  await generateHtml(path.join(DIST_FOLDER, 'index.html'));
  await generatePdf(path.join(DIST_FOLDER, 'index.pdf'));
};

main();
