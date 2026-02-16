import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../../components/ui/card/card.component';
import { ButtonComponent } from '../../components/ui/button/button.component';

@Component({
  selector: 'app-forms-basic-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent],
  templateUrl: './forms-basic.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsBasicPage {
  model = {
    fullName: 'Emma Johnson',
    email: 'emma@example.com',
    role: 'Manager',
    status: 'active',
    updates: true,
    bio: 'Product-focused manager with 6+ years leading SaaS teams.'
  };
}
