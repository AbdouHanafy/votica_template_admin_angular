import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-widget-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './widget.page.html',
  styleUrl: './widget.page.scss'
})
export class WidgetPage {
  readonly widgets = [
    { label: 'Active Subscriptions', value: '3,842', delta: '+5.4%' },
    { label: 'Monthly Revenue', value: '$82,940', delta: '+11.2%' },
    { label: 'Open Tickets', value: '124', delta: '-2.1%' },
    { label: 'Conversion Rate', value: '6.7%', delta: '+0.9%' }
  ];
}
