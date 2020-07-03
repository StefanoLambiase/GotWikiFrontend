import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';

import { LocationsComponent } from './locations.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';
import { LocationsTableComponent } from './components/locations-table/locations-table.component';

import { LocationsService } from './services/locations.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {ChartsModule} from '../../shared/charts/charts.module';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailsComponent,
    LocationsTableComponent
  ],
  exports: [
      LocationsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatGridListModule,
    ChartsModule,
  ],
  providers: [
    LocationsService,
  ],
})
export class LocationsModule { }
