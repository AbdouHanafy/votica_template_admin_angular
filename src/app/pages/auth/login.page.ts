import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './login.page.html',
  styleUrl: './auth.page.scss'
})
export class LoginPage {}
