# Changelog

All notable changes to this project are documented in this file.

## [1.1.0] - 2026-02-16

### Added

- Full localization system with persistent language preference:
  - English (`en`)
  - Francais (`fr`)
  - Tounsi (`tn`)
- Global `LanguageService` for centralized UI translations and direction handling.
- RTL support when `tn` language is selected.
- Flag assets for language selector:
  - `public/flags/us.svg`
  - `public/flags/fr.svg`
  - `public/flags/tn.svg`
- Header language dropdown with flag-first UX and persisted selection.

### Changed

- Localized core layout and major pages:
  - Header, Sidebar, Footer
  - Dashboard, Users, Analytics
  - Auth pages
  - UI Elements pages
  - Forms pages
  - Table and Data Table pages
  - Page Layouts, Tasks, Settings, Profile
- Localized shared UI elements:
  - table labels and pagination text
  - status badge labels

## [1.0.0] - 2026-02-16

### Added

- Premium Angular standalone admin structure with:
  - collapsible sidebar
  - sticky topbar
  - footer layout
- Dashboard page with KPI cards, charts, and recent activity.
- Users page with:
  - list/card view toggle
  - search, sorting, pagination
  - fake add/edit/delete actions
  - delete confirmation modal
- Analytics page with KPI widgets, charts, and progress metrics.
- Auth pages:
  - login
  - register
  - forgot password
- Extended showcase sections:
  - UI Elements
  - Forms
  - Table / Data Table
  - Page Layouts
- Branding updates:
  - product naming to Votica Template Admin Dashboard
  - logo integration from `public/`
  - profile photo integration from `public/`
- Release scripts:
  - `build:prod`
  - `test:ci`
  - `check:release`
- Release checklist document for marketplace readiness.

### Fixed

- Stylesheet resolution issues on layout components (`NG2008`).
- Sidebar structure and route mapping for new sections.
- Status badge logic for active/inactive display.
