import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-widget-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './widget.page.html',
  styleUrl: './widget.page.scss'
})
export class WidgetPage {
  readonly language = inject(LanguageService);
  readonly widgets = [
    { key: 'widget.activeSubs', value: '3,842', delta: '+5.4%' },
    { key: 'widget.monthlyRevenue', value: '$82,940', delta: '+11.2%' },
    { key: 'widget.openTickets', value: '124', delta: '-2.1%' },
    { key: 'widget.conversionRate', value: '6.7%', delta: '+0.9%' }
  ];
}
