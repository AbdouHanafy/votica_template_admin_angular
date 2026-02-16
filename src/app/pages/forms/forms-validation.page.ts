import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from '../../components/ui/card/card.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forms-validation-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardComponent, ButtonComponent],
  templateUrl: './forms-validation.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsValidationPage {
  readonly language = inject(LanguageService);
  private readonly fb = inject(FormBuilder);
  readonly serverError = signal('');
  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });

  submit(): void {
    this.serverError.set('');
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    if (this.form.value.email === 'taken@example.com') {
      this.serverError.set(this.language.t('forms.validation.serverEmailTaken'));
      return;
    }
  }
}
