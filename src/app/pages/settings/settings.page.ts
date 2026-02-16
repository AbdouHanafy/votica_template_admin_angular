import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.scss'
})
export class SettingsPage {
  readonly language = inject(LanguageService);
}
