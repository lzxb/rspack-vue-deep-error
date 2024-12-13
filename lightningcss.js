import { transform } from 'lightningcss';
import fs from 'node:fs';

transform({
  filename: 'style.css',
  code: fs.readFileSync('./src/css.css'),
  minify: true,
  sourceMap: true
});