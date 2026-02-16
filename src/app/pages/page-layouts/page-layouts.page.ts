import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-page-layouts-page',
  standalone: true,
  imports: [CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './page-layouts.page.html',
  styleUrl: './page-layouts.page.scss'
})
export class PageLayoutsPage {
  readonly layoutCards = [
    {
      name: 'Login Page Layout',
      type: 'Authentication',
      status: 'active',
      description: 'Minimal auth-focused layout with centered form and brand section.'
    },
    {
      name: 'Profile Page Layout',
      type: 'User',
      status: 'active',
      description: 'Personal profile layout with avatar block, account details, and activity.'
    },
    {
      name: 'Landing Page Layout',
      type: 'Marketing',
      status: 'active',
      description: 'Conversion-oriented landing layout with hero, feature blocks, and CTA.'
    },
    {
      name: 'Settings Page Layout',
      type: 'System',
      status: 'inactive',
      description: 'Structured settings layout for preferences, security, and notifications.'
    }
  ];

  readonly customizationOptions = [
    { option: 'Color Palette', value: 'Blue / Teal', status: 'active' },
    { option: 'Typography Set', value: 'Manrope + Space Grotesk', status: 'active' },
    { option: 'Spacing Scale', value: '8px baseline grid', status: 'active' },
    { option: 'Layout Mode', value: 'Boxed / Full Width', status: 'inactive' }
  ];
}
