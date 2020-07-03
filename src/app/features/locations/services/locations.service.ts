import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationMainInfo} from '../models/locationMainInfo/location-main-info';
import {LocationSeasonCount} from '../models/locationSeasonCount/location-season-count';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  locationsUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.locationsUrl = 'http://localhost:8080/locations';
  }

  public findAllLocationMainInfo(): Observable<LocationMainInfo[]>{
    // @ts-ignore
    return this.http.get<LocationMainInfo[]>(this.locationsUrl + '/main-infos');
  }

  public findDeathCountPerLocationAndSeason(locationName: string, season: number): Observable<LocationSeasonCount>{
    const params = new HttpParams()
      .set('locationName', locationName)
      .set('season', String(season));
    return this.http.get<LocationSeasonCount>(this.locationsUrl + '/death-count-season', {params});
  }

  public findSceneCountPerLocationAndSeason(locationName: string, season: number): Observable<LocationSeasonCount>{
    const params = new HttpParams()
      .set('locationName', locationName)
      .set('season', String(season));
    return this.http.get<LocationSeasonCount>(this.locationsUrl + '/scene-count-season', {params});
  }
}
