import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './register.page.html',
  styleUrl: './auth.page.scss'
})
export class RegisterPage {
  readonly language = inject(LanguageService);
}
