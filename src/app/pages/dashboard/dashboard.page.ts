import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { TableComponent } from '../../components/table/table.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';
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
  readonly language = inject(LanguageService);

  readonly usersColumns = computed<TableColumn[]>(() => [
    { key: 'name', label: this.language.t('table.name'), sortable: true, type: 'avatar' },
    { key: 'email', label: this.language.t('table.email'), sortable: true, type: 'email' },
    { key: 'role', label: this.language.t('table.role'), sortable: true, type: 'text' },
    { key: 'status', label: this.language.t('table.status'), sortable: true, type: 'badge' }
  ]);

  readonly ordersColumns = computed<TableColumn[]>(() => [
    { key: 'id', label: this.language.t('table.orderId'), sortable: true, type: 'text' },
    { key: 'customer', label: this.language.t('table.customer'), sortable: true, type: 'text' },
    { key: 'amount', label: this.language.t('table.amount'), sortable: true, type: 'currency' },
    { key: 'status', label: this.language.t('table.status'), sortable: true, type: 'badge' },
    { key: 'date', label: this.language.t('table.date'), sortable: true, type: 'date' }
  ]);

  readonly revenueChartSeries = computed(() => [{ name: this.language.t('dashboard.revenueGrowth'), data: this.fakeData.revenueSeries }]);
  readonly usersChartSeries = computed(() => [{ name: this.language.t('dashboard.newUsers'), data: this.fakeData.usersSeries }]);
  readonly trafficSeries = this.fakeData.trafficSources.map((source) => source.value);
  readonly trafficLabels = computed(() =>
    this.fakeData.trafficSources.map((source) => this.sourceLabel(source.label))
  );

  statLabel(label: string): string {
    if (label === 'Revenue') return this.language.t('dashboard.revenueGrowth');
    if (label === 'Total Users') return this.language.t('users.totalUsers');
    if (label === 'Orders') return this.language.t('dashboard.recentOrders');
    if (label === 'Growth') return this.language.t('dashboard.revenueGrowth');
    return label;
  }

  sourceLabel(label: string): string {
    if (label === 'Organic Search') return this.language.t('source.organic');
    if (label === 'Paid Ads') return this.language.t('source.paid');
    if (label === 'Social') return this.language.t('source.social');
    if (label === 'Direct') return this.language.t('source.direct');
    return label;
  }
}
