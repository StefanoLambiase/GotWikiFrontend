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



@NgModule({
  declarations: [
    HousesComponent,
    HousesTableComponent
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
    MatGridListModule
  ],
  providers: [
    HousesService
  ],
})
export class HousesModule { }
