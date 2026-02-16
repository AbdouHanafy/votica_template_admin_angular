import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-animations-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './animations.page.html',
  styleUrl: './animations.page.scss'
})
export class AnimationsPage {
  readonly language = inject(LanguageService);
  readonly effects = ['anim.fadeIn', 'anim.slideUp', 'anim.bounceHover', 'anim.scaleReveal'];
}
