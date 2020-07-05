import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';
import {CharactersService} from '../../services/characters.service';
import {CharacterRelationships} from '../../models/characterRelationships/character-relationships';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnChanges {
  @Input() characterSelected: CharacterMainInfo;
  characterRelationships: CharacterRelationships;

  constructor(
    private charactersService: CharactersService,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.charactersService.findAllRelationships(this.characterSelected.name).subscribe(data => {
      this.characterRelationships = data;
    });
  }



}
