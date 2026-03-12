# @nipsys/lsd-docs

Documentation site for the Logos Design System (LSD) component library. Built with Next.js 16 and React 19.

## Overview

This is the documentation site for the `@nipsys/shadcn-lsd` component library. It provides comprehensive documentation, examples, and usage guidelines for all available components.

## Getting Started

### Development

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the static site for production:

```bash
pnpm build
```

The static files will be output to the `../../docs` directory.

### Preview

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```
packages/lsd-docs/
├── app/                    # Next.js app directory
│   ├── components/         # Documentation pages for components
│   ├── design-tokens/      # Design tokens documentation
│   ├── getting-started/    # Getting started guides
│   ├── config/             # Site configuration
│   └── layout.tsx          # Root layout
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration
```

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **@nipsys/shadcn-lsd** - Component library

## Features

- Static site generation for optimal performance
- Responsive design with mobile-first approach
- Dark mode support
- Interactive component examples
- Comprehensive documentation

## Deployment

The site is configured for static export and can be deployed to any static hosting service:

- **GitHub Pages** - Already configured via `docs/` directory
- **Vercel** - Automatic deployment from git
- **Netlify** - Static site deployment
- **Cloudflare Pages** - Edge deployment

### GitHub Pages

The site is configured to deploy to GitHub Pages via the `docs/` directory. The build output is automatically placed in the correct location.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [React Documentation](https://react.dev) - Learn about React
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Learn about Tailwind CSS
