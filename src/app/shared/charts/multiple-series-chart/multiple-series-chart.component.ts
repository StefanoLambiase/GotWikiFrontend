import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-multiple-series-chart',
  templateUrl: './multiple-series-chart.component.html',
  styleUrls: ['./multiple-series-chart.component.css']
})
export class MultipleSeriesChartComponent implements OnChanges {

  @Input() public title: string;
  // tslint:disable-next-line:ban-types
  @Input() public chartData: Object[];

  // tslint:disable-next-line:ban-types
  public primaryXAxis: Object;
  // tslint:disable-next-line:ban-types
  public primaryYAxis: Object;
  // tslint:disable-next-line:ban-types
  public marker: Object;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.chartData);
    this.primaryXAxis = {
      title: 'Episodes',
      interval: 1,
      labelIntersectAction : 'Rotate45',
    };
    this.primaryYAxis = {
      title: 'Scores',
      minimum: 0, maximum: 15, interval: 1
    };
    this.marker = { visible: true, width: 10, opacity: 0.6, height: 10 };
  }

}
