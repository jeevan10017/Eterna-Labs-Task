# Deployment Guide

## Vercel Deployment

### Step 1: Prepare Repository
1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AXIOM Trade replica"
   ```

2. Push to GitHub:
   ```bash
   git remote add origin <your-github-repo-url>
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (or leave default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

5. Click "Deploy"

### Step 3: Environment Variables (if needed)
If you need environment variables:
1. Go to Project Settings → Environment Variables
2. Add any required variables
3. Redeploy

## Build Verification

Before deploying, verify the build works locally:

```bash
npm run build
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Performance Optimization

The application is optimized for Vercel:
- Automatic code splitting
- Image optimization (when using Next.js Image)
- Edge network caching
- Serverless functions ready

## Post-Deployment Checklist

- [ ] Verify all routes work correctly
- [ ] Test responsive design on mobile/tablet/desktop
- [ ] Check WebSocket connection status
- [ ] Verify real-time price updates
- [ ] Test all interactive elements (modals, popovers, tooltips)
- [ ] Run Lighthouse audit
- [ ] Test error boundaries
- [ ] Verify loading states

## Lighthouse Score Targets

Run Lighthouse audit after deployment:
- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## Demo Video

After deployment:
1. Record a 1-2 minute demo video showing:
   - Three-column layout
   - Real-time price updates
   - Interactive elements (tooltip, popover, modal)
   - Sorting and filtering
   - Responsive design (mobile/tablet/desktop)
   - Loading states

2. Upload to YouTube
3. Add link to README.md

## Responsive Snapshots

Take screenshots at these breakpoints:
- 320px (mobile)
- 768px (tablet)
- 1024px (desktop)
- 1440px (large desktop)

Attach screenshots to README or create a `/screenshots` folder.

