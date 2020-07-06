import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EpisodePerSeason} from '../models/episode-per-season';

@Injectable({
  providedIn: 'root'
})
export class SeasonService {
  seasonsUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.seasonsUrl = 'http://localhost:8080/episodes';
  }

  public getEpisodePerSeason(season: number): Observable<EpisodePerSeason[]>{
    const params =  new HttpParams()
      .set('season', String(season));
    return this.http.get<EpisodePerSeason[]>(this.seasonsUrl + '/episode-per-season', {params});
  }
}
