# Hyde Tech Solutions — v3 preview

Dev / preview build of the v3 redesign. **Noindexed**, not for production traffic.

Live version: [hydetech.ca](https://hydetech.ca) (still v1).

Source of truth: `Hyde Tech Solutions/07 - Website/site-v3/` in the Claude Folder. This repo is a path-converted mirror for preview only — it differs from source in:

- Absolute paths (`/css/…`, `/services/…`) converted to relative (`css/…`, `../services/…`) so the site renders correctly at a project Pages URL.
- `CNAME` omitted (preview lives on `*.github.io`, not `hydetech.ca`).
- `sitemap.xml` removed.
- `robots.txt` blocks all crawling.
- Each HTML page has `<meta name="robots" content="noindex, nofollow">` in place of the production canonical tag.

When promoting v3 to live, do it from `site-v3/` in the source folder (absolute paths intact). Do not push this preview repo to `hydetech.ca`.
