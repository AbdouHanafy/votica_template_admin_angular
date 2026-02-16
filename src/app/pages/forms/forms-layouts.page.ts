import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-layouts-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './forms-layouts.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsLayoutsPage {
  readonly language = inject(LanguageService);
  step = 1;

  stepLabel(): string {
    if (this.step === 1) return this.language.t('forms.layouts.accountSetup');
    if (this.step === 2) return this.language.t('forms.layouts.teamDetails');
    return this.language.t('forms.layouts.review');
  }

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
