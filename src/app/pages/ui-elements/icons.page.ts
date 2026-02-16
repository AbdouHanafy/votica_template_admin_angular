import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-icons-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './icons.page.html',
  styleUrl: './icons.page.scss'
})
export class IconsPage {
  readonly language = inject(LanguageService);
  readonly copied = signal('');
  readonly icons = ['dashboard', 'monitoring', 'group', 'settings', 'notifications', 'search', 'table_rows', 'task_alt'];

  async copyIcon(name: string): Promise<void> {
    await navigator.clipboard.writeText(name);
    this.copied.set(name);
    setTimeout(() => this.copied.set(''), 1200);
  }
}
