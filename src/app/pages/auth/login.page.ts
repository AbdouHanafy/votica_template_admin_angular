import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './login.page.html',
  styleUrl: './auth.page.scss'
})
export class LoginPage {
  readonly language = inject(LanguageService);
}
