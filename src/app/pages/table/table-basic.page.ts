import { Component, computed, inject } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { TableComponent } from '../../components/table/table.component';
import { LanguageService } from '../../core/services/language.service';
import { TableColumn } from '../../models/table.model';

@Component({
  selector: 'app-table-basic-page',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './table-basic.page.html',
  styleUrl: './table-common.page.scss'
})
export class TableBasicPage {
  readonly language = inject(LanguageService);
  readonly columns = computed<TableColumn[]>(() => [
    { key: 'sku', label: this.language.t('table.sku'), sortable: true, type: 'text' },
    { key: 'product', label: this.language.t('table.product'), sortable: true, type: 'text' },
    { key: 'category', label: this.language.t('table.category'), sortable: true, type: 'text' },
    { key: 'stock', label: this.language.t('table.stock'), sortable: true, type: 'text' },
    { key: 'status', label: this.language.t('table.status'), sortable: true, type: 'badge' }
  ]);

  readonly rows = [
    { sku: 'PRD-1043', product: 'Pro Analytics Suite', category: 'Software', stock: 48, status: 'active' },
    { sku: 'PRD-1044', product: 'Team Seats Pack', category: 'Subscription', stock: 22, status: 'active' },
    { sku: 'PRD-1045', product: 'Support Credits', category: 'Service', stock: 8, status: 'inactive' },
    { sku: 'PRD-1046', product: 'Growth Add-on', category: 'Software', stock: 17, status: 'active' },
    { sku: 'PRD-1047', product: 'Starter Bundle', category: 'Subscription', stock: 64, status: 'active' },
    { sku: 'PRD-1048', product: 'Migration Package', category: 'Service', stock: 5, status: 'inactive' },
    { sku: 'PRD-1049', product: 'Audit Toolkit', category: 'Software', stock: 31, status: 'active' },
    { sku: 'PRD-1050', product: 'Onboarding Pro', category: 'Service', stock: 11, status: 'active' }
  ];
}
