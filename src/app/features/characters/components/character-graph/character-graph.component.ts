import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {CharSeasonRangeComponent} from '../char-season-range/char-season-range.component';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';
import {SeasonDataCount} from '../../../../shared/models/seasonDataCount/season-data-count';
import {CharactersService} from '../../services/characters.service';

@Component({
  selector: 'app-character-graph',
  templateUrl: './character-graph.component.html',
  styleUrls: ['./character-graph.component.css']
})
export class CharacterGraphComponent implements OnChanges {
  @ViewChild(CharSeasonRangeComponent) private seasonRangeComponent: CharSeasonRangeComponent;

  @Input() characterMainInfo: CharacterMainInfo;
  seasonKillCounts: SeasonDataCount[];
  seasonSceneCounts: SeasonDataCount[];

  isKillChart = false;
  isSceneChart = false;

  isKillsFound = false;
  isScenesFound = false;

  constructor(
    private charactersService: CharactersService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.isKillChart = false;
    this.isSceneChart = false;
    this.updateCounts();
  }

  updateCounts(): void{
    this.isKillsFound = false;
    this.isScenesFound = false;
    // Svuoto gli array per sicurezza.
    this.seasonKillCounts = [];
    this.seasonSceneCounts = [];
    // Parte riguardante il numero di morti.
    // Itero per eseguire la ricerca solo sulle stagioni che mi interessano e ottenere il conteggio di morti.
    for (let i = 1; i < 9; i++ ){
      // Inizio la registrazione al service per ottenere il risultato.
      this.charactersService.findKillCountPerSeason(this.characterMainInfo.name, i).subscribe(data => {
        this.seasonKillCounts.push(data);

        // Ordino l'array appena ottenuto in base al valore del campo season.
        this.seasonKillCounts = this.seasonKillCounts.sort((n1, n2) => {
          if (n1.season > n2.season){
            return 1;
          } else if (n1.season < n2.season){
            return -1;
          }
          return 0;
        });
        this.isKillsFound = true;
      });
    }
    // Parte riguardante il numero di scene.
    // Itero come sopra ma per ottenere il conteggio di scene.
    for (let i = 1; i < 9; i++ ){
      this.charactersService.findSceneCountPerSeason(this.characterMainInfo.name, i).subscribe(data => {
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
        this.isScenesFound = true;
      });
    }
  }

  // tslint:disable-next-line:ban-types
  onGraphButtonPressed(seasonCount: SeasonDataCount[]): Object[]{
    // Mi prendo il range di stagioni.
    const from = this.seasonRangeComponent.from;
    const to = this.seasonRangeComponent.to;
    // tslint:disable-next-line:ban-types prefer-const
    let charData: Object[] = [];
    for (let i = from; i <= to; i++){
      charData.push(
        {
          x: seasonCount[i - 1].season,
          y: seasonCount[i - 1].count,
        }
      );
    }
    return charData;
  }
}
