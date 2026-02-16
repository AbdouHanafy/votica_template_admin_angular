import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutService } from '../../core/services/layout.service';
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

  readonly navItems: NavItem[] = [
    { section: 'Navigation', label: 'Dashboard', route: '/dashboard', icon: 'dashboard' },
    { section: 'Navigation', label: 'Analytics', route: '/analytics', icon: 'monitoring' },
    { section: 'Navigation', label: 'Page Layouts', route: '/page-layouts', icon: 'web' },
    { section: 'Ui Element', label: 'Widget', route: '/ui/widget', icon: 'widgets' },
    { section: 'Ui Element', label: 'User', route: '/users', icon: 'person', badge: 'New' },
    { section: 'Ui Element', label: 'Basic', route: '/ui/basic', icon: 'dashboard_customize' },
    { section: 'Ui Element', label: 'Advance', route: '/ui/advance', icon: 'tune' },
    { section: 'Ui Element', label: 'Animations', route: '/ui/animations', icon: 'animation' },
    { section: 'Ui Element', label: 'Icons', route: '/ui/icons', icon: 'stars' },
    { section: 'Forms', label: 'Forms', route: '/forms/basic', icon: 'description' },
    { section: 'Forms', label: 'Forms Plugins', route: '/forms/plugins', icon: 'extension' },
    { section: 'Forms', label: 'Text Editors', route: '/forms/editors', icon: 'edit_square' },
    { section: 'Forms', label: 'Form Layouts', route: '/forms/layouts', icon: 'grid_view' },
    { section: 'Forms', label: 'File Upload', route: '/forms/upload', icon: 'upload_file' },
    { section: 'Forms', label: 'Form Validation', route: '/forms/validation', icon: 'fact_check' },
    { section: 'Forms', label: 'Image Cropper', route: '/forms/cropper', icon: 'crop' },
    { section: 'Table', label: 'Table', route: '/table/basic', icon: 'table_rows' },
    { section: 'Table', label: 'Data Table', route: '/table/data', icon: 'dataset' },
    { section: 'Table', label: 'Tasks', route: '/tasks', icon: 'task_alt' },
    { section: 'Auth', label: 'Login', route: '/auth/login', icon: 'login' },
    { section: 'Auth', label: 'Register', route: '/auth/register', icon: 'person_add' },
    { section: 'Auth', label: 'Forgot Password', route: '/auth/forgot-password', icon: 'lock_reset' }
  ];
}
