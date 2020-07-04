import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LocationsComponent } from '../../features/locations/locations.component';
import { HomeComponent } from './home/home.component';
import {HousesComponent} from '../../features/houses/houses.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'locations', component: LocationsComponent },
      { path: 'houses', component: HousesComponent},
    ])
  ]
})
export class LayoutModule { }
