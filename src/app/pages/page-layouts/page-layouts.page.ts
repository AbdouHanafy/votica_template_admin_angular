import { Component, computed, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-page-layouts-page',
  standalone: true,
  imports: [CardComponent, BadgeComponent, ButtonComponent],
  templateUrl: './page-layouts.page.html',
  styleUrl: './page-layouts.page.scss'
})
export class PageLayoutsPage {
  readonly language = inject(LanguageService);

  readonly layoutCards = computed(() => [
    {
      name: this.language.t('pageLayouts.card.loginName'),
      type: this.language.t('pageLayouts.card.loginType'),
      status: 'active',
      description: this.language.t('pageLayouts.card.loginDesc')
    },
    {
      name: this.language.t('pageLayouts.card.profileName'),
      type: this.language.t('pageLayouts.card.profileType'),
      status: 'active',
      description: this.language.t('pageLayouts.card.profileDesc')
    },
    {
      name: this.language.t('pageLayouts.card.landingName'),
      type: this.language.t('pageLayouts.card.landingType'),
      status: 'active',
      description: this.language.t('pageLayouts.card.landingDesc')
    },
    {
      name: this.language.t('pageLayouts.card.settingsName'),
      type: this.language.t('pageLayouts.card.settingsType'),
      status: 'inactive',
      description: this.language.t('pageLayouts.card.settingsDesc')
    }
  ]);

  readonly customizationOptions = computed(() => [
    { option: this.language.t('pageLayouts.option.colors'), value: this.language.t('pageLayouts.option.colorsValue'), status: 'active' },
    { option: this.language.t('pageLayouts.option.typo'), value: this.language.t('pageLayouts.option.typoValue'), status: 'active' },
    { option: this.language.t('pageLayouts.option.spacing'), value: this.language.t('pageLayouts.option.spacingValue'), status: 'active' },
    { option: this.language.t('pageLayouts.option.layout'), value: this.language.t('pageLayouts.option.layoutValue'), status: 'inactive' }
  ]);
}
