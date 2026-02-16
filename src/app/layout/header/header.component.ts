import { CommonModule } from '@angular/common';
import { Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownComponent } from '../../components/ui/dropdown/dropdown.component';
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

  readonly collapsed = input(false);
  readonly theme = input<'light' | 'dark'>('light');

  readonly toggleSidebar = output<void>();
  readonly toggleMobileSidebar = output<void>();
  readonly toggleTheme = output<void>();
}
