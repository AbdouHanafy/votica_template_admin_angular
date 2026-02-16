import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { TableComponent } from '../../components/table/table.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { TableColumn } from '../../models/table.model';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, CardComponent, ChartComponent, TableComponent],
  templateUrl: './dashboard.page.html',
  styleUrl: './dashboard.page.scss'
})
export class DashboardPage {
  readonly fakeData = inject(FakeDataService);

  readonly usersColumns: TableColumn[] = [
    { key: 'name', label: 'Name', sortable: true, type: 'avatar' },
    { key: 'email', label: 'Email', sortable: true, type: 'email' },
    { key: 'role', label: 'Role', sortable: true, type: 'text' },
    { key: 'status', label: 'Status', sortable: true, type: 'badge' }
  ];

  readonly ordersColumns: TableColumn[] = [
    { key: 'id', label: 'Order ID', sortable: true, type: 'text' },
    { key: 'customer', label: 'Customer', sortable: true, type: 'text' },
    { key: 'amount', label: 'Amount', sortable: true, type: 'currency' },
    { key: 'status', label: 'Status', sortable: true, type: 'badge' },
    { key: 'date', label: 'Date', sortable: true, type: 'date' }
  ];

  readonly revenueChartSeries = [{ name: 'Revenue', data: this.fakeData.revenueSeries }];
  readonly usersChartSeries = [{ name: 'New Users', data: this.fakeData.usersSeries }];
  readonly trafficSeries = this.fakeData.trafficSources.map((source) => source.value);
  readonly trafficLabels = this.fakeData.trafficSources.map((source) => source.label);
}
