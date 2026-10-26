import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const dir = path.dirname(fileURLToPath(import.meta.url));

export default {
  id: 'jurassic-park-theme',
  label: 'Jurassic Park theme',
  description: 'Adds the Jurassic Park theme to Settings › Appearance.',
  author: 'psjamesh',
  dir,
  requires: [],
  engines: { wranglerApi: '^1.43.0' },
  defaultEnabled: true,
  themes: 'styles',
};
