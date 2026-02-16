import { CommonModule } from '@angular/common';
import { Component, computed, inject, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LanguageService } from '../../core/services/language.service';
import { NavItem } from '../../models/navigation.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  readonly language = inject(LanguageService);
  readonly items = input.required<NavItem[]>();
  readonly collapsed = input(false);
  readonly mobileOpen = input(false);

  readonly navClick = output<void>();

  readonly groupedItems = computed(() => {
    const groups: Array<{ section: string; items: NavItem[] }> = [];
    const map = new Map<string, NavItem[]>();

    for (const item of this.items()) {
      if (!map.has(item.section)) {
        map.set(item.section, []);
        groups.push({ section: item.section, items: map.get(item.section)! });
      }
      map.get(item.section)!.push(item);
    }

    return groups;
  });
}
