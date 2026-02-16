import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-editors-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './forms-editors.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsEditorsPage {
  readonly language = inject(LanguageService);
  readonly codeText = `const report = {\n  name: 'Monthly Growth',\n  status: 'active',\n  delta: '+11.2%'\n};`;

  get richText(): string {
    return `<h2>${this.language.t('forms.editors.richTitle')}</h2><p>${this.language.t('forms.editors.richBody')}</p>`;
  }
}
