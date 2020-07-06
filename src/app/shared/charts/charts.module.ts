import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import {
  CategoryService,
  LineSeriesService,
  StepLineSeriesService,
  SplineSeriesService,
  StackingLineSeriesService,
  DateTimeService,
  SplineAreaSeriesService,
  MultiColoredLineSeriesService,
  ParetoSeriesService,
  ColumnSeriesService,
  LegendService,
  DataLabelService,
  MultiLevelLabelService, SelectionService, BarSeriesService, ChartModule
} from '@syncfusion/ej2-angular-charts';
import { MultipleSeriesChartComponent } from './multiple-series-chart/multiple-series-chart.component';




@NgModule({
  declarations: [
    LineChartComponent,
    MultipleSeriesChartComponent
  ],
  exports: [
    LineChartComponent,
    MultipleSeriesChartComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
  ],
  providers: [
    CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService,
    DateTimeService, SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService,
    LegendService, DataLabelService, MultiLevelLabelService,
    SelectionService, BarSeriesService
  ]
})
export class ChartsModule { }
