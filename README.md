# Votica Template Admin Dashboard

Premium Angular standalone admin template for SaaS products, analytics back offices, and internal tools.

![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Angular](https://img.shields.io/badge/Angular-21.1.x-red.svg)
![Version](https://img.shields.io/badge/Version-1.1.0-blue.svg)

## Product Overview

- Angular `21` with standalone components only (no NgModules)
- Modern SCSS design system with dark/light mode
- Reusable UI component library
- Lazy-loaded page architecture
- Responsive layout (desktop, tablet, mobile)
- Realistic fake data across all pages (no backend required)

## Multi-Language and RTL

- Built-in language switcher with flags in topbar
- Supported languages:
  - English (`en`)
  - Francais (`fr`)
  - Tounsi (`tn`)
- Automatic RTL when Tounsi is selected
- Language preference persisted in `localStorage` (`app-language`)

## Tech Stack

- Angular `21.1.x`
- TypeScript `5.9.x`
- ApexCharts + ng-apexcharts
- Vitest (Angular test builder)

## Core Features

- Collapsible sidebar + sticky topbar layout
- Dashboard with KPI cards, charts, and activity stream
- Users management:
  - List/Card view toggle
  - Search, sorting, pagination
  - Fake CRUD actions + confirmation modal
- Analytics with KPI widgets and charts
- Auth pages:
  - Login
  - Register
  - Forgot Password
- Extended demo pages:
  - UI Elements
  - Forms
  - Table / Data Table
  - Page Layouts
  - Tasks
  - Settings
  - Profile

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

Runs:
- Production build
- Unit tests (CI mode)

## Theming

- Theme logic: `src/app/core/services/theme.service.ts`
- Persisted key: `app-theme`
- Global tokens: `src/styles.scss`

## Localization

- Language logic: `src/app/core/services/language.service.ts`
- Persisted key: `app-language`
- Flag assets:
  - `public/flags/us.svg`
  - `public/flags/fr.svg`
  - `public/flags/tn.svg`

## Routing and Lazy Loading

- Route config: `src/app/app.routes.ts`
- Pages are lazy-loaded with `loadComponent`

## Fake Data

- Centralized fake data service:
  - `src/app/services/fake-data.service.ts`

You can replace fake collections with API services without changing page structure.

## Support

- Product: `Votica Template Admin Dashboard`
- Author: `Abdou Hanafi`
- Support scope: setup help, reproducible bug fixes, and template guidance

## License

This project is licensed under the MIT License. See `LICENSE`.
