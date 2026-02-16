import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-forgot-password-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './forgot-password.page.html',
  styleUrl: './auth.page.scss'
})
export class ForgotPasswordPage {}
