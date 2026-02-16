import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  templateUrl: './register.page.html',
  styleUrl: './auth.page.scss'
})
export class RegisterPage {}
