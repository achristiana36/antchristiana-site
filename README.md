# Anthony Christiana — personal site

A graphite, editorial personal website built with Astro and edited through Pages CMS.

## Local preview

```sh
npm install
npm run dev
```

## Content editing

- `src/data/site.json` controls the homepage introduction and contact details.
- `src/content/writing` contains essays and notes.
- `src/content/creative` contains creative projects.
- `src/content/research` contains research areas, papers, talks, and projects.
- `src/content/teaching` contains courses and teaching materials.
- `.pages.yml` exposes all of these through Pages CMS.

## Deployment

The GitHub Actions workflow builds the site for GitHub Pages whenever `main` changes. The temporary deployment uses `/antchristiana-site` as its base path. When `antchristiana.com` is connected, change `astro.config.mjs` to use `site: 'https://antchristiana.com'` and remove the `base` line.
