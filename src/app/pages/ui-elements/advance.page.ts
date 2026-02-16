import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-advance-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './advance.page.html',
  styleUrl: './advance.page.scss'
})
export class AdvancePage {
  readonly language = inject(LanguageService);
  readonly components = [
    { nameKey: 'advance.modal', usageKey: 'advance.modalUsage' },
    { nameKey: 'advance.accordion', usageKey: 'advance.accordionUsage' },
    { nameKey: 'advance.tabs', usageKey: 'advance.tabsUsage' },
    { nameKey: 'advance.dropdown', usageKey: 'advance.dropdownUsage' }
  ];
}
