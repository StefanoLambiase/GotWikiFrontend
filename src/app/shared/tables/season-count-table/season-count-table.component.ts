import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-season-count-table',
  templateUrl: './season-count-table.component.html',
  styleUrls: ['./season-count-table.component.css']
})
export class SeasonCountTableComponent implements OnChanges {
  @Input() dataSource; // Dati della tabella.
  columnsToDisplay = ['season', 'count'];  // Colonne della tabella da mostrare.
  @ViewChild(MatSort, {static: true}) sort: MatSort;  // Variabile usata per ordinare la tabella per colonna.


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.dataSource);
    this.dataSource.sort = this.sort;
  }

}
