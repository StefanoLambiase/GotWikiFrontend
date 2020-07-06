import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SeasonService} from '../../services/season.service';
import {EpisodePerSeason} from '../../models/episode-per-season';

@Component({
  selector: 'app-episodes-score-graph',
  templateUrl: './episodes-score-graph.component.html',
  styleUrls: ['./episodes-score-graph.component.css']
})
export class EpisodesScoreGraphComponent implements OnChanges {
  @Input() seasonNumber;
  episodeToDisplay: EpisodePerSeason[];
  // tslint:disable-next-line:ban-types
  charData: Object[];

  constructor(
    private seasonService: SeasonService,
  ) { }


  ngOnChanges(changes: SimpleChanges): void {
    this.seasonService.getEpisodePerSeason(this.seasonNumber).subscribe( data => {
      this.episodeToDisplay = data;
      console.log(this.episodeToDisplay[0].episodeNumber);

      // Creo l'informazione da mandare al component del grafo.
      // tslint:disable-next-line:ban-types prefer-const
      this.charData = [];
      for (let i = 1; i <= this.episodeToDisplay.length; i++){
        this.charData.push(
          {
            x: this.episodeToDisplay[i - 1].episodeNumber,
            y: this.episodeToDisplay[i - 1].viewerScore,
            v: this.episodeToDisplay[i - 1].imbdScore,
            z: this.episodeToDisplay[i - 1].tomatoScore,
          }
        );
      }
    });
  }

}
