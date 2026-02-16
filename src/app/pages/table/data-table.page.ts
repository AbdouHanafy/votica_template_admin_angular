import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BadgeComponent } from '../../components/ui/badge/badge.component';
import { ButtonComponent } from '../../components/ui/button/button.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';

type SortDirection = 'asc' | 'desc';
type DealStatus = 'active' | 'inactive';

interface DealRow {
  id: string;
  client: string;
  owner: string;
  value: number;
  status: DealStatus;
}

@Component({
  selector: 'app-data-table-page',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent, ButtonComponent, BadgeComponent],
  templateUrl: './data-table.page.html',
  styleUrl: './table-common.page.scss'
})
export class DataTablePage {
  readonly language = inject(LanguageService);
  readonly rows = signal<DealRow[]>([
    { id: 'DL-3201', client: 'Acme Inc', owner: 'Emma Johnson', value: 12400, status: 'active' },
    { id: 'DL-3202', client: 'Blue Orbit', owner: 'John Smith', value: 8600, status: 'active' },
    { id: 'DL-3203', client: 'Nova Labs', owner: 'Michael Brown', value: 5400, status: 'inactive' },
    { id: 'DL-3204', client: 'Pixel Peak', owner: 'Sophia Taylor', value: 9700, status: 'active' },
    { id: 'DL-3205', client: 'Stellar Grid', owner: 'Liam Wilson', value: 11200, status: 'active' },
    { id: 'DL-3206', client: 'Quantum Hive', owner: 'Olivia Martinez', value: 4300, status: 'inactive' },
    { id: 'DL-3207', client: 'Urban Node', owner: 'Ava Thompson', value: 7200, status: 'active' },
    { id: 'DL-3208', client: 'Core Matrix', owner: 'Noah Davis', value: 6500, status: 'active' }
  ]);

  readonly query = signal('');
  readonly sortKey = signal<keyof DealRow>('client');
  readonly sortDirection = signal<SortDirection>('asc');
  readonly page = signal(1);
  readonly pageSize = 6;
  readonly editingId = signal<string | null>(null);

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    const list = this.rows();
    if (!q) {
      return list;
    }
    return list.filter((row) =>
      [row.id, row.client, row.owner, row.status, String(row.value)].some((v) =>
        v.toLowerCase().includes(q)
      )
    );
  });

  readonly sorted = computed(() => {
    const key = this.sortKey();
    const dir = this.sortDirection();
    return [...this.filtered()].sort((a, b) => {
      const left = String(a[key]).toLowerCase();
      const right = String(b[key]).toLowerCase();
      if (left === right) return 0;
      if (dir === 'asc') return left > right ? 1 : -1;
      return left < right ? 1 : -1;
    });
  });

  readonly totalPages = computed(() => Math.max(1, Math.ceil(this.sorted().length / this.pageSize)));

  readonly paginated = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.sorted().slice(start, start + this.pageSize);
  });

  setSort(key: keyof DealRow): void {
    if (this.sortKey() === key) {
      this.sortDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
      return;
    }
    this.sortKey.set(key);
    this.sortDirection.set('asc');
  }

  startEdit(id: string): void {
    this.editingId.set(id);
  }

  saveEdit(): void {
    this.editingId.set(null);
  }

  exportCsv(): void {
    const headers = ['id', 'client', 'owner', 'value', 'status'];
    const lines = [headers.join(',')];
    for (const row of this.sorted()) {
      lines.push(`${row.id},${row.client},${row.owner},${row.value},${row.status}`);
    }
    const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'deals-export.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
}
