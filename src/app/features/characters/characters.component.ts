import { Component, OnInit } from '@angular/core';
import {CharacterMainInfo} from './models/characterMainInfo/character-main-info';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characterSelected: CharacterMainInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
