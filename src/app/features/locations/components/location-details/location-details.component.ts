import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LocationSeasonCount} from '../../models/locationSeasonCount/location-season-count';
import {LocationMainInfo} from '../../models/locationMainInfo/location-main-info';
import {LocationsService} from '../../services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnChanges {
  @Input() locationMainInfo: LocationMainInfo;
  seasonDeathCounts: LocationSeasonCount[];
  seasonSceneCounts: LocationSeasonCount[];

  isDeathChart = false;

  constructor(
    private locationsService: LocationsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isDeathChart = false;
    this.updateCounts();
  }

  updateCounts(): void{
    // Svuoto gli array per sicurezza.
    this.seasonDeathCounts = [];
    this.seasonSceneCounts = [];
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
      });
    }
  }

  // tslint:disable-next-line:ban-types
  onDeathGraphButtonPressed(): Object[]{
    // tslint:disable-next-line:ban-types prefer-const
    let charData: Object[] = [];
    for (const count of this.seasonDeathCounts){
      charData.push(
        {
          x: count.season,
          y: count.count,
        }
      );
      console.log(charData);
    }
    return charData;
  }

}
