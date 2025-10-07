# Magic UI Next.js starter

This project bootstraps a [Next.js](https://nextjs.org) App Router application that is preconfigured to work with [Magic UI](https://magicui.design) components. It includes the required Tailwind CSS settings, shadcn/ui primitives, and sample Magic UI usage so you can start building animated interfaces immediately.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the site.

## What's included

- Tailwind CSS 3 configuration with CSS variables compatible with Magic UI and shadcn/ui components.
- `components.json` aliases pointing to `@/components`, `@/components/ui`, and `@/components/magicui`.
- A reusable `cn` utility and button primitive from shadcn/ui.
- Magic UI samples including `AnimatedShinyText`, `GridPattern`, `MagicCard`, and the `BentoGrid` showcase wired into the home page.

## Adding more Magic UI components

Use the [Magic UI documentation](https://magicui.design/docs/installation) to copy components into `src/components/magicui` (or add them manually from the [Magic UI repository](https://github.com/magicuidesign/magicui)). Components can then be imported with the `@/components/magicui/*` alias.

## Scripts

- `npm run dev` – start the local development server.
- `npm run build` – create an optimized production build.
- `npm run start` – run the production build.
- `npm run lint` – lint the project with ESLint.

