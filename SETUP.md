# Setting Up Combly.ai Landing Page as a Submodule

This guide will help you set up the Combly.ai landing page as a git submodule in the main extension repository.

## Prerequisites

- Git installed
- Node.js 18+ installed
- Access to both repositories

## Step 1: Push Landing Page to GitHub

First, create a new repository on GitHub named `combly-landing-page`, then:

```bash
cd /home/hamza/Fladeed/combly-landing-page
git remote add origin git@github.com:Fladeed/combly-landing-page.git
git branch -M main
git push -u origin main
```

## Step 2: Add as Submodule to Main Repository

From the main Combly Chrome Extension repository:

```bash
cd /home/hamza/Fladeed/Combly-Chrome-Extension
git submodule add git@github.com:Fladeed/combly-landing-page.git landing-page
git commit -m "Add landing page as submodule"
git push
```

## Step 3: Clone Repository with Submodule

When cloning the main repository in the future:

```bash
# Clone with submodules
git clone --recurse-submodules git@github.com:Fladeed/Combly-Chrome-Extension.git

# Or if already cloned, initialize submodules
cd Combly-Chrome-Extension
git submodule init
git submodule update
```

## Step 4: Install Dependencies and Run

```bash
cd landing-page
npm install
npm run dev
```

The landing page will be available at http://localhost:3000

## Updating the Submodule

### In the Submodule (landing-page):

```bash
cd landing-page
git checkout main
git pull origin main
# Make your changes
git add .
git commit -m "Your changes"
git push origin main
```

### In the Main Repository:

```bash
cd ..  # Back to main repo
git add landing-page
git commit -m "Update landing page submodule"
git push
```

## Working with Submodules - Common Commands

```bash
# Pull latest changes in all submodules
git submodule update --remote --merge

# Check status of all submodules
git submodule status

# Execute command in all submodules
git submodule foreach 'git pull origin main'
```

## Build for Production

```bash
cd landing-page
npm run build
```

The production build will be in the `.next` directory.

## Deploy

You can deploy the landing page to:
- **Vercel** (recommended for Next.js): `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Build and deploy the `out` directory (requires `next export`)

## Troubleshooting

### Submodule not updating

```bash
git submodule update --init --recursive --remote
```

### Detached HEAD in submodule

```bash
cd landing-page
git checkout main
```

### Remove submodule

```bash
git submodule deinit landing-page
git rm landing-page
rm -rf .git/modules/landing-page
```
