import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() xLabel: string;
  @Input() yLabel: string;
  // tslint:disable-next-line:ban-types
  @Input() chartData: Object[];
  @Input() title: string;
  // tslint:disable-next-line:ban-types
  primaryXAxis: Object;
  // tslint:disable-next-line:ban-types
  primaryYAxis: Object;

  constructor() { }

  ngOnInit(): void {
    this.chartData = [
      {
        x: 1,
        y: 2
      },
      {
        x: 4,
        y: 5,
      }
    ];
  }

}
