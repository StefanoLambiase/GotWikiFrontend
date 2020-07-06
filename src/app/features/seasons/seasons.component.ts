import {Component, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      // Mi prendo le informazioni.
      this.seasonNumber = params.get('seasonNumber');
    });
  }

}
