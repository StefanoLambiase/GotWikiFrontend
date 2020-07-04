import {Component, Input, OnInit} from '@angular/core';
import {HouseKillCount} from '../../models/houseKillCount/house-kill-count';
import {HousesService} from '../../services/houses.service';

@Component({
  selector: 'app-houses-card',
  templateUrl: './houses-card.component.html',
  styleUrls: ['./houses-card.component.css']
})
export class HousesCardComponent implements OnInit {
  @Input() houseKillCount: HouseKillCount;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
