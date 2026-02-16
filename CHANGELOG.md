# Changelog

All notable changes to this project are documented in this file.

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

