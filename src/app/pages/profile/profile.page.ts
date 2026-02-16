import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './profile.page.html',
  styleUrl: './profile.page.scss'
})
export class ProfilePage {
  readonly data = inject(FakeDataService);
  readonly language = inject(LanguageService);
}
