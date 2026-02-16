import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-forms-layouts-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './forms-layouts.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsLayoutsPage {
  step = 1;

  nextStep(): void {
    if (this.step < 3) {
      this.step += 1;
    }
  }

  prevStep(): void {
    if (this.step > 1) {
      this.step -= 1;
    }
  }
}
