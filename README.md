# Form Study portfolio

## Open locally

Extract the entire ZIP, then double-click index.html in the root folder or docs/index.html. Keep the folders together.

## Upload to GitHub Pages

1. Extract the ZIP. Upload its contents to the root of your repository on the main branch, keeping the folders together. The docs folder contains the built website.
2. Open Settings → Pages. Under Build and deployment, choose Deploy from a branch, select main and /docs, and save.
3. Open the site address shown in Pages after deployment finishes.

## Edit and rebuild

Use Node.js 24 and pnpm 11. Run these commands in the directory containing package.json:

    pnpm install --frozen-lockfile
    pnpm dev

Edit your display name, Telegram URL, other contacts and project descriptions in src/portfolio.config.ts. The Pattern Waves component and its CSS are in src.

Run pnpm build to create dist. To update GitHub Pages, replace the contents of docs with the new dist contents and upload your changes. Keep all filenames and subfolders intact.

