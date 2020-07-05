import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';
import {CharactersService} from '../../services/characters.service';
import {CategoriesKillCount} from '../../models/categoriesKillCount/categories-kill-count';
import {KilledPerson} from '../../models/killedPerson/killed-person';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnChanges {
  @Input() characterSelected: CharacterMainInfo;
  categoriesKillCount: CategoriesKillCount;
  killedPersons: KilledPerson[];

  constructor(
    private charactersService: CharactersService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.charactersService.findKillCountPerCategories(this.characterSelected.name).subscribe(data => {
      this.categoriesKillCount = data;
    });
    this.charactersService.findAllKilledPeople(this.characterSelected.name).subscribe(data => {
      this.killedPersons = data;
    });
  }


}

