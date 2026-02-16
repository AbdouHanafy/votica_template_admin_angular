# Votica Template Admin Dashboard

Premium Angular standalone admin template for SaaS products, analytics back offices, and internal tools.

## Product Overview

- Angular `21` with standalone components (no NgModules)
- SCSS design system with dark/light theme
- Reusable UI component library
- Lazy-loaded page architecture
- Responsive layout for desktop, tablet, and mobile
- Realistic fake data for all demo pages (no backend dependency)

## Tech Stack

- Angular `21.1.x`
- TypeScript `5.9.x`
- ApexCharts + ng-apexcharts
- Vitest (via Angular test builder)

## Features

- Collapsible sidebar + sticky topbar layout
- Dashboard with KPI cards and charts
- Multi-language UI with persistent selector:
  - English
  - Francais
  - Tounsi (with RTL)
- Flag-based language selector in topbar
- Users management page:
  - list and card views
  - search, sorting, pagination
  - fake CRUD interactions
- Analytics page with KPI widgets and chart visualizations
- Auth pages:
  - login
  - register
  - forgot password
- UI Elements, Forms, and Table demo sections

## Project Structure

```text
src/app/
  core/
  layout/
  pages/
  components/
  shared/
  models/
  services/
```

## Installation

```bash
npm install
```

## Run Development

```bash
npm run start
```

Default URL: `http://localhost:4200/`

## Production Build

```bash
npm run build:prod
```

Build output: `dist/my-angular-template`

## Testing

```bash
npm run test:ci
```

## Release Quality Gate

```bash
npm run check:release
```

This runs:
- production build
- unit tests in CI mode

## Theme Customization

- Global theming is handled by `ThemeService` in `src/app/core/services/theme.service.ts`.
- Theme mode is persisted in `localStorage` with key `app-theme`.
- Main style tokens are in `src/styles.scss`.

## Language and Localization

- Global localization is handled by `LanguageService` in `src/app/core/services/language.service.ts`.
- Selected language is persisted in `localStorage` with key `app-language`.
- Topbar selector uses local SVG flags from `public/flags/`.
- RTL is automatically applied for Tunisian language mode.

## Routing and Lazy Loading

All main pages are loaded with `loadComponent` in `src/app/app.routes.ts`.

## Fake Data

Demo data is centralized in:
- `src/app/services/fake-data.service.ts`

You can replace these collections with API-backed services without changing page contracts.

## Support

- Product name: `Votica Template Admin Dashboard`
- Author: `Abdou Hanafi`
- Support scope: bug fixes and setup guidance for this template codebase.
