import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {LocationSeasonCount} from '../../models/locationSeasonCount/location-season-count';
import {LocationMainInfo} from '../../models/locationMainInfo/location-main-info';
import {LocationsService} from '../../services/locations.service';
import {LocSeasonRangeComponent} from '../loc-season-range/loc-season-range.component';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

/***
 * Component contenente i dettagli di una Location e i grafici ad essa associati.
 */
@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnChanges {
  @ViewChild(LocSeasonRangeComponent) private seasonRangeComponent: LocSeasonRangeComponent;

  @Input() locationMainInfo: LocationMainInfo;  // Variabile contenente le info della location selezionata nella tabella.
  seasonDeathCounts: LocationSeasonCount[];
  seasonSceneCounts: LocationSeasonCount[];

  isDeathChart = false; // Variabile che viene settata a vera quando bisogna mostrare il grafo. Viene fatto un controllo nel file HTML.
  isSceneChart = false;

  constructor(
    private locationsService: LocationsService
  ) { }

  /***
   * Viene chiamato ogni volta che una variabile @Input viene modificata. Tale modifica, viene fatta dal component padre.
   * @param changes la modifica.
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.isDeathChart = false;
    this.updateCounts();
  }

  /***
   * Metodo chiamato ogni volta che la location selezionata, nella tabella, cambia.
   * Calcola il numero di morti e di scene per stagione e li salva in due array.
   * Il calcolo, viene fatto chiamando un servizio nel back-end.
   */
  updateCounts(): void{
    // Svuoto gli array per sicurezza.
    this.seasonDeathCounts = [];
    this.seasonSceneCounts = [];
    // Parte riguardante il numero di morti.
    // Itero per eseguire la ricerca solo sulle stagioni che mi interessano e ottenere il conteggio di morti.
    for (let i = 1; i < 9; i++ ){
      // Inizio la registrazione al service per ottenere il risultato.
      this.locationsService.findDeathCountPerLocationAndSeason(this.locationMainInfo.locationName, i).subscribe(data => {
        this.seasonDeathCounts.push(data);

        // Ordino l'array appena ottenuto in base al valore del campo season.
        this.seasonDeathCounts = this.seasonDeathCounts.sort((n1, n2) => {
          if (n1.season > n2.season){
            return 1;
          } else if (n1.season < n2.season){
            return -1;
          }
          return 0;
        });
      });
    }
    // Parte riguardante il numero di scene.
    // Itero come sopra ma per ottenere il conteggio di scene.
    for (let i = 1; i < 9; i++ ){
      this.locationsService.findSceneCountPerLocationAndSeason(this.locationMainInfo.locationName, i).subscribe(data => {
        this.seasonSceneCounts.push(data);

        // Ordino l'array appena ottenuto in base al valore del campo season.
        this.seasonSceneCounts = this.seasonSceneCounts.sort((n1, n2) => {
          if (n1.season > n2.season){
            return 1;
          } else if (n1.season < n2.season){
            return -1;
          }
          return 0;
        });
        this.isSceneChart = true;
      });
    }
  }

  /***
   * Metodo usato per passare un array di oggetti renderizzabili dal component per creare il grafo a linee.
   */
  // tslint:disable-next-line:ban-types
  onDeathGraphButtonPressed(): Object[]{
    this.isDeathChart = true;
    // Mi prendo il range di stagioni.
    const from = this.seasonRangeComponent.from;
    const to = this.seasonRangeComponent.to;
    // tslint:disable-next-line:ban-types prefer-const
    let charData: Object[] = [];
    for (let i = from; i <= to; i++){
      charData.push(
        {
          x: this.seasonDeathCounts[i - 1].season,
          y: this.seasonDeathCounts[i - 1].count,
        }
      );
    }
    return charData;
  }

}
