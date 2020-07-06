import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SeasonService} from './services/season.service';
import {EpisodePerSeason} from './models/episode-per-season';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.css']
})
export class SeasonsComponent implements OnInit {
  seasonNumber;
  episodeToDisplay: EpisodePerSeason[];
  // tslint:disable-next-line:ban-types
  charData: Object[];

  constructor(
    private route: ActivatedRoute,
    private seasonService: SeasonService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Mi prendo le informazioni.
      this.seasonNumber = params.get('seasonNumber');
    });
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
