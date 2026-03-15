# 5of12 Site

This repository now builds the 5of12 site as a static SvelteKit app.

## Development

```bash
npm install
npm run dev
```

## Quality checks

```bash
npm run check
npm run build
```

## Content

- Home and about pages live in `src/routes`
- Journal posts remain in `_posts` and are parsed at build time
- Static images and media are served from `static/assets/`
