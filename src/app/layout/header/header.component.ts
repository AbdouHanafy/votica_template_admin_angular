import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../components/ui/dropdown/dropdown.component';
import { LanguageService } from '../../core/services/language.service';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly data = inject(FakeDataService);
  readonly language = inject(LanguageService);

  readonly collapsed = input(false);
  readonly theme = input<'light' | 'dark'>('light');

  readonly toggleSidebar = output<void>();
  readonly toggleMobileSidebar = output<void>();
  readonly toggleTheme = output<void>();

  currentLanguage() {
    return this.language.options.find((item) => item.code === this.language.current());
  }

  toggleFullscreen(): void {
    const element = document.documentElement;
    if (!document.fullscreenElement) {
      void element.requestFullscreen?.();
      return;
    }

    void document.exitFullscreen?.();
  }
}
