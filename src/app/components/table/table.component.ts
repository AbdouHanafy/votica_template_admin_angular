import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../ui/badge/badge.component';
import { TableAction, TableActionEvent, TableColumn } from '../../models/table.model';

type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule, CurrencyPipe, DatePipe, BadgeComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  readonly columns = input.required<TableColumn[]>();
  readonly rows = input.required<Record<string, unknown>[]>();
  readonly actions = input<TableAction[]>([]);
  readonly pageSize = input(5);
  readonly title = input<string>('');
  readonly subtitle = input<string>('');
  readonly searchPlaceholder = input('Search...');

  readonly query = signal('');
  readonly currentPage = signal(1);
  readonly sortKey = signal<string | null>(null);
  readonly sortDirection = signal<SortDirection>('asc');
  readonly actionSelected = output<TableActionEvent>();

  readonly filteredRows = computed(() => {
    const rawQuery = this.query().trim().toLowerCase();
    if (!rawQuery) {
      return this.rows();
    }

    return this.rows().filter((row) =>
      Object.values(row).some((value) => String(value).toLowerCase().includes(rawQuery))
    );
  });

  readonly sortedRows = computed(() => {
    const list = [...this.filteredRows()];
    const key = this.sortKey();
    if (!key) {
      return list;
    }

    const direction = this.sortDirection();
    return list.sort((a, b) => {
      const left = String(a[key] ?? '').toLowerCase();
      const right = String(b[key] ?? '').toLowerCase();
      if (left === right) {
        return 0;
      }
      if (direction === 'asc') {
        return left > right ? 1 : -1;
      }
      return left < right ? 1 : -1;
    });
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.sortedRows().length / this.pageSize())));

  readonly paginatedRows = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    return this.sortedRows().slice(start, start + this.pageSize());
  });

  setSort(column: TableColumn): void {
    if (!column.sortable) {
      return;
    }

    if (this.sortKey() === column.key) {
      this.sortDirection.update((value) => (value === 'asc' ? 'desc' : 'asc'));
      return;
    }

    this.sortKey.set(column.key);
    this.sortDirection.set('asc');
  }

  onSearchChange(): void {
    this.currentPage.set(1);
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update((value) => value - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update((value) => value + 1);
    }
  }

  isSorted(columnKey: string): boolean {
    return this.sortKey() === columnKey;
  }

  cellText(row: Record<string, unknown>, key: string): string {
    return String(row[key] ?? '');
  }

  emitAction(actionKey: string, row: Record<string, unknown>): void {
    this.actionSelected.emit({ actionKey, row });
  }
}
