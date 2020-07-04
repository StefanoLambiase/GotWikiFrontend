import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonCountTableComponent } from './season-count-table/season-count-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';



@NgModule({
  declarations: [
    SeasonCountTableComponent
  ],
  exports: [
    SeasonCountTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule
  ]
})
export class TablesModule { }
