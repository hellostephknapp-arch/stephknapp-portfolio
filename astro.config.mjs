// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom apex domain root: https://stephknapp.com/
// (Custom domain is configured in GitHub Pages + the public/CNAME file.)
export default defineConfig({
  site: 'https://stephknapp.com',
});
