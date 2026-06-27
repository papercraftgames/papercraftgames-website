import { mkdir, readFile, writeFile } from 'node:fs/promises';

const templatePath = new URL('../src/admin/config.yml.template', import.meta.url);
const outputPath = new URL('../public/admin/config.yml', import.meta.url);
const clientId = process.env.DECAP_GITHUB_CLIENT_ID ?? '';
const oauthBaseUrl = process.env.DECAP_OAUTH_BASE_URL ?? 'https://api.netlify.com';

const template = await readFile(templatePath, 'utf8');
const config = template
  .replace('__DECAP_GITHUB_CLIENT_ID__', clientId)
  .replace('__DECAP_OAUTH_BASE_URL__', oauthBaseUrl);

await mkdir(new URL('../public/admin/', import.meta.url), { recursive: true });
await writeFile(outputPath, config);
