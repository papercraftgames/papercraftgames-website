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

## Content

The public site is a static Astro site. Content lives in `src/content` and assets live in `public`.

Pushes to `main` and manual workflow dispatches trigger `.github/workflows/deploy.yml`, which builds Astro and publishes a clean `dist/` output to the `gh-pages` branch.
