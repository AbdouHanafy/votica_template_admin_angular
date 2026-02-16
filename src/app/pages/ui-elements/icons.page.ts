import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-icons-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './icons.page.html',
  styleUrl: './icons.page.scss'
})
export class IconsPage {
  readonly copied = signal('');
  readonly icons = ['dashboard', 'monitoring', 'group', 'settings', 'notifications', 'search', 'table_rows', 'task_alt'];

  async copyIcon(name: string): Promise<void> {
    await navigator.clipboard.writeText(name);
    this.copied.set(name);
    setTimeout(() => this.copied.set(''), 1200);
  }
}
