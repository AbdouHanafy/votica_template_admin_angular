import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-forms-editors-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './forms-editors.page.html',
  styleUrl: './forms-common.page.scss'
})
export class FormsEditorsPage {
  readonly richText = `<h2>Release Notes</h2><p>New dashboard widgets are now available with improved loading performance and updated analytics views.</p>`;
  readonly codeText = `const report = {\n  name: 'Monthly Growth',\n  status: 'active',\n  delta: '+11.2%'\n};`;
}
