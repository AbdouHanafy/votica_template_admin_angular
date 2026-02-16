import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-plugins-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './forms-plugins.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsPluginsPage {
  readonly language = inject(LanguageService);
  model = {
    launchDate: '2026-03-01',
    themeColor: '#2563eb',
    tag: '',
    tags: ['SaaS', 'B2B'],
    framework: 'Angular'
  };

  addTag(): void {
    const value = this.model.tag.trim();
    if (!value) {
      return;
    }
    this.model.tags = [...this.model.tags, value];
    this.model.tag = '';
  }
}
