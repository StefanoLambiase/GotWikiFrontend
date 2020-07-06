import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousesComponent } from './houses.component';
import { HousesTableComponent } from './components/houses-table/houses-table.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatGridListModule} from '@angular/material/grid-list';
import {HousesService} from './services/houses.service';
import { HousesCardComponent } from './components/houses-card/houses-card.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { HousesCharCardComponent } from './components/houses-char-card/houses-char-card.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    HousesComponent,
    HousesTableComponent,
    HousesCardComponent,
    HousesCharCardComponent
  ],
  exports: [
    HousesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [
    HousesService
  ],
})
export class HousesModule { }
