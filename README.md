# papercraftgames-website

Astro source for the Papercraft Games website.

## Local development

```sh
npm install
npm run dev
```

Production validation:

```sh
npm run check
npm run build
```

## Content and CMS

The public site is built from source on `main` plus editable content from the `content` branch. Decap CMS is available at `/admin/` and writes Markdown to `src/content` and uploads to `public/uploads` on the `content` branch.

The CMS route is intentionally not linked from the public site navigation. Local `/admin/` should render the Decap shell, but GitHub login will not work unless the Decap OAuth proxy is available and the values below are configured.

GitHub authentication for Decap needs an OAuth proxy because GitHub does not allow a static-only site to complete the OAuth code exchange safely. Configure these GitHub Actions secrets:

- `DECAP_GITHUB_CLIENT_ID`: the Client ID from the GitHub OAuth App used by the Decap OAuth proxy.
- `DECAP_OAUTH_BASE_URL`: the origin of the deployed OAuth proxy, for example `https://cms-auth.example.com`. It must expose `/auth` and `/callback`.

Create the OAuth App in GitHub under `Settings -> Developer settings -> OAuth Apps`. Use the deployed proxy callback URL, normally `https://YOUR_PROXY_DOMAIN/callback`, as the Authorization callback URL. The OAuth App client secret belongs in the OAuth proxy's own secret store, not in this static website repo.

Pushes to either `main` or `content` trigger `.github/workflows/deploy.yml`, which builds Astro and publishes a clean `dist/` output to the `gh-pages` branch.
