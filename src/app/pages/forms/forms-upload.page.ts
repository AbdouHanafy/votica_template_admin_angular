import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-upload-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './forms-upload.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsUploadPage {
  readonly language = inject(LanguageService);
  readonly files = signal<string[]>([]);
  readonly dragActive = signal(false);

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    const selected = Array.from(input.files ?? []).map((file) => file.name);
    if (selected.length) {
      this.files.update((list) => [...list, ...selected]);
    }
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.dragActive.set(false);
    const dropped = Array.from(event.dataTransfer?.files ?? []).map((file) => file.name);
    if (dropped.length) {
      this.files.update((list) => [...list, ...dropped]);
    }
  }
}
