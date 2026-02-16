import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-advance-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './advance.page.html',
  styleUrl: './advance.page.scss'
})
export class AdvancePage {
  readonly components = [
    { name: 'Modal Variants', usage: 'Delete confirmations, onboarding, detail view' },
    { name: 'Accordion Sets', usage: 'FAQ blocks and settings groups' },
    { name: 'Tabs', usage: 'Analytics filters and profile modules' },
    { name: 'Dropdown Menus', usage: 'Topbar profile and notifications' }
  ];
}
