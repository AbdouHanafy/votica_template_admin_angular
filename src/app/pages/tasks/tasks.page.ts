import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { LanguageService } from '../../core/services/language.service';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CardComponent, BadgeComponent],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.scss'
})
export class TasksPage {
  readonly language = inject(LanguageService);
  readonly tasks = [
    { title: 'Design onboarding flow', owner: 'Emma Johnson', status: 'active' },
    { title: 'Prepare Q1 growth report', owner: 'John Smith', status: 'active' },
    { title: 'Audit account permissions', owner: 'Michael Brown', status: 'inactive' }
  ];
}
