import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ChartComponent } from '../../components/chart/chart.component';
import { CardComponent } from '../../components/ui/card/card.component';
import { LanguageService } from '../../core/services/language.service';
import { FakeDataService } from '../../services/fake-data.service';

@Component({
  selector: 'app-analytics-page',
  standalone: true,
  imports: [CommonModule, CardComponent, ChartComponent],
  templateUrl: './analytics.page.html',
  styleUrl: './analytics.page.scss'
})
export class AnalyticsPage {
  readonly data = inject(FakeDataService);
  readonly language = inject(LanguageService);

  readonly areaSeries = this.data.analyticsAreaSeries;
  readonly comparisonCurrentSeries = [{ name: '2026', data: this.data.monthlyComparison.map((item) => item.current) }];
  readonly comparisonPreviousSeries = [{ name: '2025', data: this.data.monthlyComparison.map((item) => item.previous) }];
  readonly comparisonCategories = this.data.monthlyComparison.map((item) => item.month);

  sourceLabel(label: string): string {
    if (label === 'Organic Search') return this.language.t('source.organic');
    if (label === 'Paid Ads') return this.language.t('source.paid');
    if (label === 'Social') return this.language.t('source.social');
    if (label === 'Direct') return this.language.t('source.direct');
    return label;
  }
}
