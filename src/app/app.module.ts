import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {LocationsModule} from './features/locations/locations.module';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import {LayoutModule} from './shared/layout/layout.module';
import {RouterModule} from '@angular/router';
import {HousesModule} from './features/houses/houses.module';
import {CharactersModule} from './features/characters/characters.module';
import {SeasonsModule} from './features/seasons/seasons.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HousesModule,
    ChartModule,
    LayoutModule,
    RouterModule,
    LocationsModule,
    HousesModule,
    CharactersModule,
    SeasonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
