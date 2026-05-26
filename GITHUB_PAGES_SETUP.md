# GitHub Pages Deployment Guide

## What Changed

Your project has been converted from a **TanStack Start full-stack application** to a **static React site** optimized for GitHub Pages hosting.

### Key Changes Made:

1. **Removed TanStack Start dependencies**
   - Removed `@tanstack/react-start`
   - Removed `@tanstack/router-plugin`
   - Removed `@cloudflare/vite-plugin`
   - Removed `vite-tsconfig-paths`

2. **Updated Vite Configuration** (`vite.config.ts`)
   - Changed from `@lovable.dev/vite-tanstack-config` to standard Vite + React setup
   - Added `base: "/Afripot/"` for GitHub Pages subdirectory hosting
   - Configured for static site generation

3. **Created Entry Points**
   - `index.html` - HTML entry point
   - `src/main.tsx` - React entry point that initializes the router

4. **Updated Root Route** (`src/routes/__root.tsx`)
   - Removed server-side features (`HeadContent`, `Scripts`)
   - Simplified to client-side only rendering

5. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`)
   - Automatically builds and deploys on push to `main` branch
   - Deploys to GitHub Pages

## Deployment Steps

### 1. Configure GitHub Pages

1. Go to your repository: https://github.com/Enock27/Afripot
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - Source: Select **GitHub Actions**
   - This will use the workflow we created

### 2. Push to GitHub

```bash
git add .
git commit -m "Convert to static React site for GitHub Pages"
git push origin main
```

### 3. Monitor Deployment

1. Go to your repository
2. Click **Actions** tab
3. Watch the "Deploy to GitHub Pages" workflow run
4. Once complete, your site will be live at: **https://enock27.github.io/Afripot/**

## Important Notes

### Base Path
- The site is deployed to `/Afripot/` subdirectory
- All asset paths are automatically prefixed with `/Afripot/`
- This is configured in `vite.config.ts` with `base: "/Afripot/"`

### Limitations vs Full-Stack
- **No server-side features**: API routes, server functions, etc. won't work
- **Static content only**: All pages are pre-built HTML files
- **Client-side routing**: Navigation works via React Router

### If You Need Server Features Later
If you need backend functionality (forms, API calls, etc.), consider:
- **Cloudflare Pages** (recommended for TanStack Start)
- **Vercel** (great for React apps)
- **Netlify** (good for static sites with serverless functions)

## Troubleshooting

### 404 Errors on Page Refresh
If you get 404 errors when refreshing on sub-pages:
1. GitHub Pages needs a `404.html` file for SPA routing
2. This is typically handled by the deployment action
3. If issues persist, check the Actions tab for build errors

### Assets Not Loading
- Check that all asset paths use relative imports
- Verify the `base: "/Afripot/"` is set in `vite.config.ts`
- Clear browser cache and rebuild

### Build Failures
1. Check the Actions tab for error messages
2. Run `npm install` locally to ensure dependencies are correct
3. Run `npm run build` locally to test the build

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Next Steps

1. **Test locally**: Run `npm run dev` and verify all pages work
2. **Push to GitHub**: Commit and push your changes
3. **Monitor deployment**: Check the Actions tab
4. **Verify live site**: Visit https://enock27.github.io/Afripot/

---

For questions or issues, check the GitHub Actions logs for detailed error messages.
