import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';

@Component({
  selector: 'app-animations-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './animations.page.html',
  styleUrl: './animations.page.scss'
})
export class AnimationsPage {
  readonly effects = ['Fade In', 'Slide Up', 'Bounce Hover', 'Scale Reveal'];
}
