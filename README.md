# Combly.ai Landing Page

A modern, responsive landing page for Combly.ai - AI-Powered Browser Automation Extension.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling with custom medical theme
- **Fully Responsive** design
- **SEO Optimized** with metadata
- **Fast Performance** with Turbopack
- **Medical Theme Colors** matching the extension design

## 🎨 Design System

The landing page uses the same medical-themed color palette as the extension:

- **Primary Blue**: `hsl(200 100% 45%)` - Medical professional blue
- **Medical Green**: `hsl(160 60% 50%)` - Success and health
- **Gradients**: Beautiful transitions from blue to green
- **Shadows**: Consistent elevation system

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🏗️ Build

```bash
npm run build
```

## 📁 Project Structure

```
combly-landing-page/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Header navigation
│   ├── Hero.tsx         # Hero section
│   ├── Features.tsx     # Features showcase
│   ├── HowItWorks.tsx   # Process explanation
│   ├── UseCases.tsx     # Industry use cases
│   ├── AIProviders.tsx  # AI provider showcase
│   ├── CTA.tsx          # Call to action
│   └── Footer.tsx       # Footer
└── public/
    └── images/          # Static assets
```

## 🎯 Sections

1. **Hero** - Eye-catching introduction with CTA
2. **Features** - 9 key features with icons and descriptions
3. **How It Works** - 4-step process visualization
4. **Use Cases** - Industry-specific applications
5. **AI Providers** - Showcase of supported AI services
6. **CTA** - Download and get started
7. **Footer** - Links and information

## 🔗 Integration with Extension

This landing page is designed as a submodule for the main Combly Chrome Extension repository. To add it as a submodule:

```bash
cd /path/to/Combly-Chrome-Extension
git submodule add <repository-url> landing-page
```

## 📝 License

Part of the Combly.ai project.

## 🤝 Contributing

This is a companion project to the main Combly Chrome Extension.
