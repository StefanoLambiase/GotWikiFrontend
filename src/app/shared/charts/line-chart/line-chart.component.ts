import {Component, Input, OnInit} from '@angular/core';

/***
 * Component rappresentante un semplice grafo a righe. Riutilizzabile a discrezione dell'utente.
 * Per usare risulta necessario passare un array di Object correttamente costruito.
 * Per un esempio vedere il metodo "onDeathGraphButtonPressed" in location-details.component.ts.
 * Il passaggio del valore avviene tramite HTML.
 */
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() title: string;
  @Input() xLabel: string;
  @Input() yLabel: string;
  // tslint:disable-next-line:ban-types
  @Input() chartData: Object[];
  // tslint:disable-next-line:ban-types
  primaryXAxis: Object;
  // tslint:disable-next-line:ban-types
  primaryYAxis: Object;

  constructor() { }

  ngOnInit(): void {
  }

}
