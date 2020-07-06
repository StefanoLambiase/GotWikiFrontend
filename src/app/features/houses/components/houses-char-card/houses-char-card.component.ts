import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {HouseKillCount} from '../../models/houseKillCount/house-kill-count';
import {CharactersService} from '../../../characters/services/characters.service';
import {CharacterMainInfo} from '../../../characters/models/characterMainInfo/character-main-info';

@Component({
  selector: 'app-houses-char-card',
  templateUrl: './houses-char-card.component.html',
  styleUrls: ['./houses-char-card.component.css']
})
export class HousesCharCardComponent implements OnChanges {
  @Input() houseKillCount: HouseKillCount;
  characterInfo: CharacterMainInfo[];

  constructor(
    private charactersService: CharactersService
  ) { }

  ngOnChanges(): void {
    this.charactersService.findAllCharacterMainInfo().subscribe( data => {
      this.characterInfo = data;
      const characters: CharacterMainInfo[] = [];
      for (const x of this.characterInfo){
        if (x.house.includes(this.houseKillCount.houseName)){
          characters.push(x);
        }
      }
      this.characterInfo = characters;
    });
  }

}
