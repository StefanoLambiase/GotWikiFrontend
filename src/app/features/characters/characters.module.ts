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
import {MatIconModule} from '@angular/material/icon';
import { CharSeasonRangeComponent } from './components/char-season-range/char-season-range.component';
import {FormsModule} from '@angular/forms';
import { CharacterGraphComponent } from './components/character-graph/character-graph.component';
import {ChartsModule} from '../../shared/charts/charts.module';


@NgModule({
  declarations: [
    CharactersComponent,
    CharactersTableComponent,
    CharacterDetailsComponent,
    CharacterCardComponent,
    KillsCardComponent,
    CharSeasonRangeComponent,
    CharacterGraphComponent,
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
    MatListModule,
    MatIconModule,
    FormsModule,
    ChartsModule
  ],
  providers: [
    CharactersService,
  ]
})
export class CharactersModule { }
