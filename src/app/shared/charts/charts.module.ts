import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import {ChartModule, DataLabelService, LegendService, MultiLevelLabelService, SelectionService} from '@syncfusion/ej2-angular-charts';
import { CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService, DateTimeService,
  SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService } from '@syncfusion/ej2-angular-charts';
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
    ChartModule
  ],
  providers: [
    CategoryService, LineSeriesService, StepLineSeriesService, SplineSeriesService, StackingLineSeriesService,
    DateTimeService, SplineAreaSeriesService, MultiColoredLineSeriesService, ParetoSeriesService, ColumnSeriesService,
    CategoryService, ColumnSeriesService, LineSeriesService, LegendService, DataLabelService, MultiLevelLabelService,
    SelectionService,
  ]
})
export class ChartsModule { }
