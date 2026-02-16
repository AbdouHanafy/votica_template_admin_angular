import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, input, signal } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
  exportAs: 'appDropdown'
})
export class DropdownComponent {
  readonly align = input<'left' | 'right'>('right');
  readonly panelWidth = input<string>('260px');

  readonly open = signal(false);

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  toggle(event?: Event): void {
    event?.stopPropagation();
    this.open.update((value) => !value);
  }

  close(): void {
    this.open.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.close();
    }
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }
}
