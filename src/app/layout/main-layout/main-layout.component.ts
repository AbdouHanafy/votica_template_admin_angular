import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutService } from '../../core/services/layout.service';
import { LanguageService } from '../../core/services/language.service';
import { ThemeService } from '../../core/services/theme.service';
import { NavItem } from '../../models/navigation.model';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  readonly layoutService = inject(LayoutService);
  readonly themeService = inject(ThemeService);
  readonly language = inject(LanguageService);

  readonly navItems = computed<NavItem[]>(() => [
    { section: this.language.t('nav.section.navigation'), label: this.language.t('nav.dashboard'), route: '/dashboard', icon: 'dashboard' },
    { section: this.language.t('nav.section.navigation'), label: this.language.t('nav.analytics'), route: '/analytics', icon: 'monitoring' },
    { section: this.language.t('nav.section.navigation'), label: this.language.t('nav.pageLayouts'), route: '/page-layouts', icon: 'web' },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.widget'), route: '/ui/widget', icon: 'widgets' },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.user'), route: '/users', icon: 'person', badge: this.language.t('nav.new') },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.basic'), route: '/ui/basic', icon: 'dashboard_customize' },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.advance'), route: '/ui/advance', icon: 'tune' },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.animations'), route: '/ui/animations', icon: 'animation' },
    { section: this.language.t('nav.section.ui'), label: this.language.t('nav.icons'), route: '/ui/icons', icon: 'stars' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.forms'), route: '/forms/basic', icon: 'description' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.formsPlugins'), route: '/forms/plugins', icon: 'extension' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.textEditors'), route: '/forms/editors', icon: 'edit_square' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.formLayouts'), route: '/forms/layouts', icon: 'grid_view' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.fileUpload'), route: '/forms/upload', icon: 'upload_file' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.formValidation'), route: '/forms/validation', icon: 'fact_check' },
    { section: this.language.t('nav.section.forms'), label: this.language.t('nav.imageCropper'), route: '/forms/cropper', icon: 'crop' },
    { section: this.language.t('nav.section.table'), label: this.language.t('nav.table'), route: '/table/basic', icon: 'table_rows' },
    { section: this.language.t('nav.section.table'), label: this.language.t('nav.dataTable'), route: '/table/data', icon: 'dataset' },
    { section: this.language.t('nav.section.table'), label: this.language.t('nav.tasks'), route: '/tasks', icon: 'task_alt' },
    { section: this.language.t('nav.section.auth'), label: this.language.t('nav.login'), route: '/auth/login', icon: 'login' },
    { section: this.language.t('nav.section.auth'), label: this.language.t('nav.register'), route: '/auth/register', icon: 'person_add' },
    { section: this.language.t('nav.section.auth'), label: this.language.t('nav.forgotPassword'), route: '/auth/forgot-password', icon: 'lock_reset' }
  ]);
}
