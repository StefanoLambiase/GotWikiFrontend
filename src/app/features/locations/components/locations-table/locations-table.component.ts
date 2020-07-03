import {Component, OnInit, EventEmitter, Output, ViewChild} from '@angular/core';
import {LocationMainInfo} from '../../models/locationMainInfo/location-main-info';
import {MatSort} from '@angular/material/sort';
import {LocationsService} from '../../services/locations.service';
import {MatTableDataSource} from '@angular/material/table';

/***
 * Component contenente i dati relativi a tutte le location nel DB e che si occupa di costruire la tabella.
 */
@Component({
  selector: 'app-locations-table',
  templateUrl: './locations-table.component.html',
  styleUrls: ['./locations-table.component.css']
})
export class LocationsTableComponent implements OnInit {
  /* Variables for table formatting */
  locationMainInfos: LocationMainInfo[];  // Lista di QueryResults. Sono le informazioni su tutte le location.
  dataSource; // Dati della tabella.
  columnsToDisplay = ['name', 'subLocations', 'sceneCount', 'deathCount'];  // Colonne della tabella da mostrare.
  @ViewChild(MatSort, {static: true}) sort: MatSort;  // Variabile usata per ordinare la tabella per colonna.

  /* Variable for comunication with parent component */
  @Output() selectedLocationEvent = new EventEmitter<LocationMainInfo>();

  /* Methdos */

  constructor(
    private locationService: LocationsService,
  ) { }

  ngOnInit(): void {
    // Metodo che chiama il servizio che riceve, dal back-end, le informazioni sulle location.
    this.locationService.findAllLocationMainInfo().subscribe(data => {
      this.locationMainInfos = data;
      // Dopo aver ottenuto tutte le informazioni, vado a costruire l'array di info da usare per la costruzione della tabella.
      this.dataSource = new MatTableDataSource(this.locationMainInfos);
      this.dataSource.sort = this.sort;
    });
  }

  /***
   * Metodo usato per fare la ricerca nella tabella.
   * @param event evento lanciato al momento in cui si scrive nel campo del filtro.
   */
  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /***
   * Metodo che lancia un evento nel momento in cui si preme una riga della tabella.
   * Informa il component padre di quale location è stata selezionata.
   * @param locationMainInfo la location selezionata dalla tabella.
   */
  // tslint:disable-next-line:typedef
  selectLocation(locationMainInfo: LocationMainInfo){
    this.selectedLocationEvent.emit(locationMainInfo);
  }
}
