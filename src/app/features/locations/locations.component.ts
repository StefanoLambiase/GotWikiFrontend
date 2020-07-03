import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationsTableComponent} from './components/locations-table/locations-table.component';
import {LocationDetailsComponent} from './components/location-details/location-details.component';
import {LocationMainInfo} from './models/locationMainInfo/location-main-info';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  @ViewChild(LocationsTableComponent) locationTableComponent: LocationsTableComponent;
  @ViewChild(LocationDetailsComponent) locationDetailsComponent: LocationDetailsComponent;

  locationSelected: LocationMainInfo;

  showDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onLocationSelected(locationMainInfo: LocationMainInfo){
    this.locationSelected = locationMainInfo;
    this.showDetails = true;
    return this.locationSelected;
  }
}
