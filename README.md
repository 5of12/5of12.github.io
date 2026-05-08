# 5of12 Site

This repository builds the 5of12 site as a static SvelteKit app and deploys it to GitHub Pages.

The previous Jekyll/Ruby build has been removed. GitHub CodeQL default setup was also disabled because it was still trying to analyze Ruby even though the site no longer contains Ruby source.

## Development

```bash
npm install
npm run dev
```

The dev server defaults to Vite's local URL, usually `http://localhost:5173/`.

## Quality checks

```bash
npm run check
npm run build
```

`npm run build` writes the static site to `build/`, which is the directory uploaded by the GitHub Pages workflow.

## Content

- Home and about pages live in `src/routes/`.
- Shared site data lives in `src/lib/content/site.ts`.
- Journal posts remain in `_posts/` and are parsed at build time.
- Static images and media are served from `static/assets/`.

## Markdown Rendering

Journal posts are currently parsed from the old Jekyll-style `_posts/` directory by `src/lib/server/posts.ts`. This preserves the existing content during the Svelte transition, but it is not as capable as the previous Jekyll Markdown pipeline.

For future Markdown work, consider adding mdsvex so posts can be rendered as first-class Svelte content with component support, layouts and better authoring ergonomics:

- Svelte CLI mdsvex docs: https://svelte.dev/docs/cli/mdsvex

Likely migration path:

1. Add mdsvex to the Svelte config.
2. Move posts from `_posts/` into a Svelte-friendly content route or content directory.
3. Keep existing front matter fields: `title`, `author`, `date`, `coverImage`.
4. Replace the custom Markdown parsing in `src/lib/server/posts.ts` once mdsvex owns rendering.

## Deployment

GitHub Pages deploys from `.github/workflows/deploy.yml` on pushes to `main`.

The workflow:

1. Installs Node dependencies with `npm ci`.
2. Builds the static SvelteKit site with `npm run build`.
3. Uploads the `build/` directory to GitHub Pages.
