import { Component } from '@angular/core';
import { CardComponent } from '../../components/ui/card/card.component';
import { TableComponent } from '../../components/table/table.component';
import { TableColumn } from '../../models/table.model';

@Component({
  selector: 'app-table-basic-page',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './table-basic.page.html',
  styleUrl: './table-common.page.scss'
})
export class TableBasicPage {
  readonly columns: TableColumn[] = [
    { key: 'sku', label: 'SKU', sortable: true, type: 'text' },
    { key: 'product', label: 'Product', sortable: true, type: 'text' },
    { key: 'category', label: 'Category', sortable: true, type: 'text' },
    { key: 'stock', label: 'Stock', sortable: true, type: 'text' },
    { key: 'status', label: 'Status', sortable: true, type: 'badge' }
  ];

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
