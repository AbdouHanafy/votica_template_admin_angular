# Release Checklist (ThemeForest Ready)

Use this checklist before submitting the template for sale.

## 1. Automated Quality Gate

- [ ] Run `npm run check:release` and confirm all commands pass.
- [ ] Verify production build has no Angular errors.
- [ ] Verify unit tests cover critical flows (not only app bootstrap).

Current status:
- `npm run build` : PASS
- `npm run test -- --watch=false` : PASS
- `npm run check:release` : PASS

## 2. Documentation Package

- [ ] Replace default `README.md` with product documentation:
  - install and run
  - project structure
  - theme customization
  - routing/pages map
  - component usage
- [ ] Add `CHANGELOG.md` with semantic versions.
- [ ] Add support policy (response time, support scope).

Current status:
- Product documentation is in place:
  - `README.md`
  - `CHANGELOG.md`
  - `SUPPORT.md`

## 3. Licensing and Legal

- [ ] Add a project `LICENSE` file for your distributed code.
- [ ] Add `CREDITS.md` for third-party assets/libraries:
  - Angular
  - ApexCharts / ng-apexcharts
  - icons/fonts/images used in template
- [ ] Confirm logo/profile images are redistributable.

Current status:
- Legal docs are in place:
  - `LICENSE`
  - `CREDITS.md`

## 4. Product Readiness (UI/UX)

- [ ] Validate responsive behavior on:
  - 360px mobile
  - 768px tablet
  - 1280px desktop
- [ ] Validate dark/light mode across all pages.
- [ ] Validate table interactions (search/sort/pagination/edit/delete) in both user views.
- [ ] Validate auth pages (login/register/forgot) visual consistency with brand.

## 5. Marketplace Submission Assets

- [ ] Prepare marketplace screenshots (home, users, analytics, dark mode, mobile view).
- [ ] Prepare a live preview/demo URL.
- [ ] Prepare release ZIP:
  - source code
  - documentation
  - changelog
  - license/credits

## 6. Recommended Pre-Submission Command Set

```bash
npm ci
npm run check:release
npm run start
```
