import { Component, OnInit } from '@angular/core';
import {CharacterMainInfo} from './models/characterMainInfo/character-main-info';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterSelected: CharacterMainInfo;
  showDetails = false;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onCharacterSelected(characterMainInfo: CharacterMainInfo){
    this.characterSelected = characterMainInfo;
    this.showDetails = true;
  }
}
