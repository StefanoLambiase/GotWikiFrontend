import {Component, Input, OnInit} from '@angular/core';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() characterSelected: CharacterMainInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
