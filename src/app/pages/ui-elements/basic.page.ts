import { Component, inject } from '@angular/core';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-basic-page',
  standalone: true,
  imports: [CardComponent, ButtonComponent, BadgeComponent],
  templateUrl: './basic.page.html',
  styleUrl: './basic.page.scss'
})
export class BasicPage {
  readonly language = inject(LanguageService);
}
