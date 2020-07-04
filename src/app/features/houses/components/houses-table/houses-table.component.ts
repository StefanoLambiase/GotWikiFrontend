import {Component, OnInit, ViewChild} from '@angular/core';
import {HouseKillCount} from '../../models/houseKillCount/house-kill-count';
import {MatSort} from '@angular/material/sort';
import {HousesService} from '../../services/houses.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-houses-table',
  templateUrl: './houses-table.component.html',
  styleUrls: ['./houses-table.component.css']
})
export class HousesTableComponent implements OnInit {

  houseKillCount: HouseKillCount[]; // Lista di QueryResult
  dataSource;
  columnsToDisplay = ['Name', 'Religion', 'Lord', 'KillCount'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private housesService: HousesService
  ) { }

  ngOnInit(): void {
    this.housesService.DeathCountPerHouse().subscribe(data => {
      this.houseKillCount = data;
      this.dataSource = new MatTableDataSource(this.houseKillCount);
      this.dataSource.sort = this.sort;
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
