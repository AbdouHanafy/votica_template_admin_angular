import { CommonModule } from '@angular/common';
import { Component, HostListener, input, output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  readonly open = input(false);
  readonly title = input('Confirm action');
  readonly description = input('Are you sure you want to continue?');
  readonly confirmLabel = input('Confirm');
  readonly cancelLabel = input('Cancel');
  readonly tone = input<'neutral' | 'danger'>('neutral');

  readonly confirm = output<void>();
  readonly cancel = output<void>();
  readonly close = output<void>();

  onBackdropClose(): void {
    this.close.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.open()) {
      this.close.emit();
    }
  }
}
