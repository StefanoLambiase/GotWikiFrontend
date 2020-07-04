import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';
import {CharactersService} from './services/characters.service';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersTableComponent,
  ],
  exports: [
    CharactersComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CharactersService,
  ]
})
export class CharactersModule { }
