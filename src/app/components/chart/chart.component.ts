import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  readonly series = input.required<any[]>();
  readonly chart = input.required<any>();
  readonly xaxis = input<any>();
  readonly yaxis = input<any>();
  readonly stroke = input<any>();
  readonly labels = input<string[]>();
  readonly colors = input<string[]>();
  readonly legend = input<any>();
  readonly plotOptions = input<any>();
  readonly dataLabels = input<any>();
  readonly fill = input<any>();
  readonly tooltip = input<any>();
}
