import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage)
      },
      {
        path: 'users',
        loadComponent: () => import('./pages/users/users.page').then((m) => m.UsersPage)
      },
      {
        path: 'analytics',
        loadComponent: () => import('./pages/analytics/analytics.page').then((m) => m.AnalyticsPage)
      },
      {
        path: 'page-layouts',
        loadComponent: () =>
          import('./pages/page-layouts/page-layouts.page').then((m) => m.PageLayoutsPage)
      },
      {
        path: 'ui/widget',
        loadComponent: () =>
          import('./pages/ui-elements/widget.page').then((m) => m.WidgetPage)
      },
      {
        path: 'ui/basic',
        loadComponent: () =>
          import('./pages/ui-elements/basic.page').then((m) => m.BasicPage)
      },
      {
        path: 'ui/advance',
        loadComponent: () =>
          import('./pages/ui-elements/advance.page').then((m) => m.AdvancePage)
      },
      {
        path: 'ui/animations',
        loadComponent: () =>
          import('./pages/ui-elements/animations.page').then((m) => m.AnimationsPage)
      },
      {
        path: 'ui/icons',
        loadComponent: () =>
          import('./pages/ui-elements/icons.page').then((m) => m.IconsPage)
      },
      {
        path: 'forms/basic',
        loadComponent: () =>
          import('./pages/forms/forms-basic.page').then((m) => m.FormsBasicPage)
      },
      {
        path: 'forms/plugins',
        loadComponent: () =>
          import('./pages/forms/forms-plugins.page').then((m) => m.FormsPluginsPage)
      },
      {
        path: 'forms/editors',
        loadComponent: () =>
          import('./pages/forms/forms-editors.page').then((m) => m.FormsEditorsPage)
      },
      {
        path: 'forms/layouts',
        loadComponent: () =>
          import('./pages/forms/forms-layouts.page').then((m) => m.FormsLayoutsPage)
      },
      {
        path: 'forms/upload',
        loadComponent: () =>
          import('./pages/forms/forms-upload.page').then((m) => m.FormsUploadPage)
      },
      {
        path: 'forms/validation',
        loadComponent: () =>
          import('./pages/forms/forms-validation.page').then((m) => m.FormsValidationPage)
      },
      {
        path: 'forms/cropper',
        loadComponent: () =>
          import('./pages/forms/forms-cropper.page').then((m) => m.FormsCropperPage)
      },
      {
        path: 'table/basic',
        loadComponent: () =>
          import('./pages/table/table-basic.page').then((m) => m.TableBasicPage)
      },
      {
        path: 'table/data',
        loadComponent: () =>
          import('./pages/table/data-table.page').then((m) => m.DataTablePage)
      },
      {
        path: 'tasks',
        loadComponent: () => import('./pages/tasks/tasks.page').then((m) => m.TasksPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/settings/settings.page').then((m) => m.SettingsPage)
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.page').then((m) => m.ProfilePage)
      }
    ]
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./pages/auth/login.page').then((m) => m.LoginPage)
  },
  {
    path: 'auth/register',
    loadComponent: () => import('./pages/auth/register.page').then((m) => m.RegisterPage)
  },
  {
    path: 'auth/forgot-password',
    loadComponent: () =>
      import('./pages/auth/forgot-password.page').then((m) => m.ForgotPasswordPage)
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];
