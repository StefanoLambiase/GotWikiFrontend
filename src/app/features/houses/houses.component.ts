import { Component, OnInit } from '@angular/core';
import {HouseKillCount} from './models/houseKillCount/house-kill-count';
import {HousesService} from './services/houses.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  selectedHouse: HouseKillCount;
  showDetails = false;

  constructor(
    private housesService: HousesService
  ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSelectedHouse(houseKillCount: HouseKillCount){
    this.selectedHouse = houseKillCount;
    this.showDetails = true;
  }
}
