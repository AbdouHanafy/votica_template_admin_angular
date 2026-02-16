import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-forms-cropper-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './forms-cropper.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsCropperPage {
  readonly rotation = signal(0);
  readonly zoom = signal(1);

  rotate(): void {
    this.rotation.update((value) => (value + 90) % 360);
  }
}
