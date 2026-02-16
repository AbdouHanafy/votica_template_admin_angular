import { Component, inject, signal } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-cropper-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './forms-cropper.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsCropperPage {
  readonly language = inject(LanguageService);
  readonly rotation = signal(0);
  readonly zoom = signal(1);

  rotate(): void {
    this.rotation.update((value) => (value + 90) % 360);
  }
}
