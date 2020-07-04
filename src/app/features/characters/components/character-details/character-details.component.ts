import {Component, Input, OnInit} from '@angular/core';
import {CharacterMainInfo} from '../../models/characterMainInfo/character-main-info';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css']
})
export class CharacterDetailsComponent implements OnInit {
  @Input() characterSelected: CharacterMainInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
