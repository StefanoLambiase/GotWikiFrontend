import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharactersTableComponent } from './components/characters-table/characters-table.component';
import {CharactersService} from './services/characters.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { KillsCardComponent } from './components/kills-card/kills-card.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersTableComponent,
    CharacterDetailsComponent,
    CharacterCardComponent,
    KillsCardComponent,
  ],
  exports: [
    CharactersComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule
  ],
  providers: [
    CharactersService,
  ]
})
export class CharactersModule { }
