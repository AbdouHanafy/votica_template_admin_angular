import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './forgot-password.page.html',
  styleUrl: './auth.page.scss'
})
export class ForgotPasswordPage {
  readonly language = inject(LanguageService);
}
