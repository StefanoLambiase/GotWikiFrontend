import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {CategoriesKillCount} from '../../models/categoriesKillCount/categories-kill-count';
import {KilledPerson} from '../../models/killedPerson/killed-person';

@Component({
  selector: 'app-kills-card',
  templateUrl: './kills-card.component.html',
  styleUrls: ['./kills-card.component.css']
})
export class KillsCardComponent implements OnChanges {
  @Input() categoriesKillCount: CategoriesKillCount;
  @Input() killedPersons: KilledPerson[];

  killCatCountLength: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.killCatCountLength = this.categoriesKillCount.killMethodCategories.length;
  }


}
