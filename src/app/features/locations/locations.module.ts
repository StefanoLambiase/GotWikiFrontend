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
import {LayoutModule} from '../../shared/layout/layout.module';
import { LocSeasonRangeComponent } from './components/loc-season-range/loc-season-range.component';
import {FormsModule} from '@angular/forms';
import {TablesModule} from '../../shared/tables/tables.module';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationDetailsComponent,
    LocationsTableComponent,
    LocSeasonRangeComponent
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
    LayoutModule,
    FormsModule,
    TablesModule,
  ],
  providers: [
    LocationsService,
  ],
})
export class LocationsModule { }
