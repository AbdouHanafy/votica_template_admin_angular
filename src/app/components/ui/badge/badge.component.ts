import { CommonModule } from '@angular/common';
import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {
  readonly label = input.required<string>();
  readonly tone = input<'success' | 'warning' | 'danger' | 'neutral'>('neutral');

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
