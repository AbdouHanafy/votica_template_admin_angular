import { CommonModule } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  readonly language = inject(LanguageService);
  readonly label = input.required<string>();
  readonly tone = input<'success' | 'warning' | 'danger' | 'neutral'>('neutral');

  readonly displayLabel = computed(() => {
    const raw = this.label().toLowerCase();
    if (raw === 'active') return this.language.t('status.active');
    if (raw === 'inactive') return this.language.t('status.inactive');
    if (raw === 'processing') return this.language.t('status.processing');
    if (raw === 'completed') return this.language.t('status.completed');
    if (raw === 'cancelled') return this.language.t('status.cancelled');
    return this.label();
  });

  readonly mappedTone = computed(() => {
    const value = this.label().toLowerCase();
    if (this.tone() !== 'neutral') {
      return this.tone();
    }
    if (value.includes('inactive') || value.includes('cancelled')) {
      return 'danger';
    }
    if (value.includes('active') || value.includes('completed')) {
      return 'success';
    }
    if (value.includes('pending') || value.includes('processing')) {
      return 'warning';
    }
    return 'neutral';
  });
}
