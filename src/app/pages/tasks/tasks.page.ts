import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { BadgeComponent } from '../../components/ui/badge/badge.component';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [CardComponent, BadgeComponent],
  templateUrl: './tasks.page.html',
  styleUrl: './tasks.page.scss'
})
export class TasksPage {
  readonly tasks = [
    { title: 'Design onboarding flow', owner: 'Emma Johnson', status: 'active' },
    { title: 'Prepare Q1 growth report', owner: 'John Smith', status: 'active' },
    { title: 'Audit account permissions', owner: 'Michael Brown', status: 'inactive' }
  ];
}
