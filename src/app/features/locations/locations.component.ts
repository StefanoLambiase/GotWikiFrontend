import {Component, OnInit, ViewChild} from '@angular/core';
import {LocationMainInfo} from './models/locationMainInfo/location-main-info';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  /* Variables */

  locationSelected: LocationMainInfo; // Variabile che contiene la location selezionata dalla tabella. Può essere vuota.
  showDetails = false;  // Variabile usata dal file HTML per capire se costruire il component che mostra i dettagli della location.

  /* Methods */

  constructor() { }

  ngOnInit(): void {
  }

  /***
   * Metodo chiamato nel momento in cui una delle location nella tabella (component figlio) viene selezionata.
   * @param locationMainInfo la location selezionata.
   */
  // tslint:disable-next-line:typedef
  onLocationSelected(locationMainInfo: LocationMainInfo){
    this.locationSelected = locationMainInfo;
    this.showDetails = true;
  }
}
