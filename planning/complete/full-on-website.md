# Full-On Website

1. We no longer want to have a website in a docs folder.
2. We need to use Astro for this site.
3. We want a fully automated website build that deploys this site from source code in main to a clean root in a gh-pages
   branch as per normal.
4. This now needs to be a full-on website. Small, but no more placeholder.
5. We can talk/make content about upcoming, simple, cozy games. Games that will use FPE.
6. The games will be described in the `full-on-website` folder that goes with this plan.
7. You will also make content about our main FOSS tool, Folded Paper Engine (FPE). You can get all the content and infor
   you need for that from the website which is already referenced in this website.
8. Be a professional. The site design should stay mostly the same and you need to match the brand. But you are a
   high-end professional designer and the site should reflect that.
9. We have an itch.io https://papercraft-games.itch.io/
10. We need to use a simple headless CMS for this. Use Decap. The workflow that builds the Decap UI should pull in an
    github api creds it needs from a repo actions secret. Let me know what the name of the secret should be and how to
    get it's value.
11. Decap CMS will save content to a `content` branch. Changes to either main or content will trigger a gh pages build.
    The build can pull the content from the content branch and incorporate it with the latest source code from the main
    branch, accordingly.
12. There is also concept art in the `full-on-website` folder. That should be incorporated in the site with the content
    for the game it belongs with. Some concept art is AI generated but we should have a small disclaimer that game art
    will not be AI generated and if it is, it'll be a small part of the overall game art.

Keep this summary.
Track below.
Be thorough.
Be professional.
Do high-end work.
Reach out if you need human made art or something for the website.
Be smart.

## Progress

- [x] Replace the `docs/` placeholder website with an Astro source tree at the repository root.
- [x] Move existing brand assets, icons, and `CNAME` into `public/`.
- [x] Add game content from the supplied Entailed and Upcoming Magical Adventure PDFs.
- [x] Incorporate supplied concept art into the game sections.
- [x] Add the AI concept-art disclaimer requested in the plan.
- [x] Add Folded Paper Engine positioning and links based on the existing FPE website.
- [x] Add Decap CMS at `/admin/` with editable game and site copy collections.
- [x] Configure Decap to write content to the `content` branch.
- [x] Add GitHub Actions deployment that builds from `main` source plus `content` branch content and deploys a clean `dist/` to `gh-pages`.
- [x] Document required CMS OAuth secrets in `README.md`.
- [x] Validate with `npm run check`, `npm run build`, and local desktop/mobile Playwright screenshots.
