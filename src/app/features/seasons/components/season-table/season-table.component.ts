import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {EpisodePerSeason} from '../../models/episode-per-season';
import {MatSort} from '@angular/material/sort';
import {SeasonService} from '../../services/season.service';
import {MatTableDataSource} from '@angular/material/table';
import {HouseKillCount} from '../../../houses/models/houseKillCount/house-kill-count';

@Component({
  selector: 'app-season-table',
  templateUrl: './season-table.component.html',
  styleUrls: ['./season-table.component.css']
})
export class SeasonTableComponent implements OnChanges {
  episodeToDisplay: EpisodePerSeason[];
  dataSource;
  @Input() seasonNumber: number;
  columnsToDisplay = ['Title', 'Writer', 'Number', 'Viewers Score', 'IMBD Score', 'Rotten Tomatoes Score'];

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  @Output() selectedEpisodeEvent = new EventEmitter<EpisodePerSeason>();

  constructor(
    private seasonService: SeasonService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.seasonService.getEpisodePerSeason(this.seasonNumber).subscribe( data => {
      this.episodeToDisplay = data;
      this.dataSource = new MatTableDataSource(this.episodeToDisplay);
      this.dataSource.sort = this.sort;
      console.log(this.episodeToDisplay[0].episodeNumber);
    });
  }

  // tslint:disable-next-line:typedef
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // tslint:disable-next-line:typedef
  selectEpisode(episodePerSeason: EpisodePerSeason){
    this.selectedEpisodeEvent.emit(episodePerSeason);
  }
}
