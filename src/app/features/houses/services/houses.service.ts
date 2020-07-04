import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HouseKillCount} from '../models/houseKillCount/house-kill-count';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  houseURL: string;

  constructor(
    private http: HttpClient,
  ) {
    this.houseURL = 'http://localhost:8080/houses';
  }

  public DeathCountPerHouse(): Observable<HouseKillCount[]> {
    return this.http.get<HouseKillCount[]>(this.houseURL + '/find-kill-count');
  }

  public CoaByName(housesName: string): Observable<string> {
    const params = new HttpParams()
      .set('name', housesName);
    return this.http.get<string> (this.houseURL + '/coa-by-name', {params});
  }
}
