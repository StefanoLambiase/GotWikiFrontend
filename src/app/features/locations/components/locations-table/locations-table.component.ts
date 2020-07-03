import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {LocationMainInfo} from '../../models/locationMainInfo/location-main-info';
import {MatSort} from '@angular/material/sort';
import {LocationsService} from '../../services/locations.service';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.css']
})
export class LocationsTableComponent implements OnInit {
  /* Variables for table formatting */
  locationMainInfos: LocationMainInfo[];
  dataSource;
  columnsToDisplay = ['name', 'subLocations', 'sceneCount', 'deathCount'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  /* Variable for comunication with parent component */
  @Output() selectedLocation = new EventEmitter<LocationMainInfo>();

  /* Methdos */

  constructor(
    private locationService: LocationsService,
  ) { }

  ngOnInit(): void {
    this.locationService.findAllLocationMainInfo().subscribe(data => {
      this.locationMainInfos = data;
      this.dataSource = new MatTableDataSource(this.locationMainInfos);
      this.dataSource.sort = this.sort;
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  selectLocation(locationMainInfo: LocationMainInfo){
    this.selectedLocation.emit(locationMainInfo);
  }
}
