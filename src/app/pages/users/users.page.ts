import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { TableComponent } from '../../components/table/table.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { ModalComponent } from '../../components/ui/modal/modal.component';
import { TableAction, TableActionEvent, TableColumn } from '../../models/table.model';
import { User, UserRole, UserStatus } from '../../models/user.model';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-users-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CardComponent,
    TableComponent,
    ButtonComponent,
    BadgeComponent,
    ModalComponent
  ],
  templateUrl: './users.page.html',
  styleUrl: './users.page.scss'
})
export class UsersPage {
  private readonly data = inject(FakeDataService);

  readonly users = signal<User[]>([...this.data.users]);
  readonly viewMode = signal<'list' | 'card'>('list');
  readonly cardQuery = signal('');
  readonly cardRole = signal<'all' | UserRole>('all');
  readonly cardStatus = signal<'all' | UserStatus>('all');
  readonly selectedUser = signal<User | null>(null);
  readonly showDeleteModal = signal(false);

  readonly usersColumns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true, type: 'avatar' },
    { key: 'email', label: 'Email', sortable: true, type: 'email' },
    { key: 'role', label: 'Role', sortable: true, type: 'text' },
    { key: 'status', label: 'Status', sortable: true, type: 'badge' },
    { key: 'actions', label: 'Actions', type: 'actions' }
  ];

  readonly rowActions: TableAction[] = [
    { key: 'edit', icon: 'edit', label: 'Edit' },
    { key: 'delete', icon: 'delete', label: 'Delete', tone: 'danger' }
  ];

  readonly deleteMessage = computed(() => {
    const user = this.selectedUser();
    if (!user) {
      return 'Are you sure you want to remove this user?';
    }
    return `Delete ${user.name} from this workspace? This action cannot be undone.`;
  });

  readonly totalUsers = computed(() => this.users().length);
  readonly activeUsers = computed(() => this.users().filter((user) => user.status === 'active').length);
  readonly inactiveUsers = computed(() => this.users().filter((user) => user.status === 'inactive').length);
  readonly roles = computed<UserRole[]>(() => {
    const set = new Set(this.users().map((user) => user.role));
    return Array.from(set);
  });

  readonly filteredCardUsers = computed(() => {
    const query = this.cardQuery().trim().toLowerCase();
    const role = this.cardRole();
    const status = this.cardStatus();

    return this.users().filter((user) => {
      const matchesQuery =
        !query ||
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.role.toLowerCase().includes(query);
      const matchesRole = role === 'all' || user.role === role;
      const matchesStatus = status === 'all' || user.status === status;
      return matchesQuery && matchesRole && matchesStatus;
    });
  });

  onAddUser(): void {
    const firstNames = ['Ethan', 'Chloe', 'Benjamin', 'Nora', 'Lucas', 'Grace'];
    const lastNames = ['Scott', 'Parker', 'Baker', 'Reed', 'Ward', 'Cooper'];
    const roles: UserRole[] = ['Viewer', 'Support', 'Manager'];
    const statuses: UserStatus[] = ['active', 'inactive'];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const id = this.users().length + 1;
    const name = `${firstName} ${lastName}`;
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;

    const newUser: User = {
      id,
      name,
      email,
      role,
      status,
      avatar: `https://i.pravatar.cc/80?img=${10 + ((id * 7) % 60)}`,
      joinDate: '2026-02-16'
    };

    this.users.update((list) => [newUser, ...list]);
  }

  onAction(event: TableActionEvent): void {
    const user = event.row as unknown as User;
    if (event.actionKey === 'edit') {
      this.onEditUser(user);
      return;
    }

    this.onRequestDelete(user);
  }

  setViewMode(mode: 'list' | 'card'): void {
    this.viewMode.set(mode);
  }

  resetCardFilters(): void {
    this.cardQuery.set('');
    this.cardRole.set('all');
    this.cardStatus.set('all');
  }

  onEditUser(user: User): void {
    this.users.update((list) =>
      list.map((item) =>
        item.id === user.id
          ? { ...item, status: item.status === 'active' ? 'inactive' : 'active' }
          : item
      )
    );
  }

  onRequestDelete(user: User): void {
    this.selectedUser.set(user);
    this.showDeleteModal.set(true);
  }

  confirmDelete(): void {
    const target = this.selectedUser();
    if (!target) {
      return;
    }

    this.users.update((list) => list.filter((user) => user.id !== target.id));
    this.closeDeleteModal();
  }

  closeDeleteModal(): void {
    this.showDeleteModal.set(false);
    this.selectedUser.set(null);
  }
}
