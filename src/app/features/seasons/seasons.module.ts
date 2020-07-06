import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons.component';
import { SeasonTableComponent } from './components/season-table/season-table.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {SeasonService} from './services/season.service';
import {ChartsModule} from '../../shared/charts/charts.module';



@NgModule({
  declarations: [SeasonsComponent, SeasonTableComponent],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatSortModule,
        ChartsModule
    ],
  providers: [
    SeasonService,
  ],
})
export class SeasonsModule { }
