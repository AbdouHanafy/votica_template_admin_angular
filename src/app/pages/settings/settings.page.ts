import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './settings.page.html',
  styleUrl: './settings.page.scss'
})
export class SettingsPage {}
