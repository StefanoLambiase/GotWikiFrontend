import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterMainInfo} from '../models/characterMainInfo/character-main-info';
import {CharacterRelationships} from '../models/characterRelationships/character-relationships';
import {KilledPerson} from '../models/killedPerson/killed-person';
import {CategoriesKillCount} from '../models/categoriesKillCount/categories-kill-count';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  charactersUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.charactersUrl = 'http://localhost:8080/characters';
  }

  public findAllCharacterMainInfo(): Observable<CharacterMainInfo[]>{
    return this.http.get<CharacterMainInfo[]>(this.charactersUrl + '/all-main-info');
  }

  public findAllRelationships(characterName: string): Observable<CharacterRelationships>{
    const params = new HttpParams()
      .set('characterName', characterName);
    return this.http.get<CharacterRelationships>(this.charactersUrl + '/all-relationships', {params});
  }

  public findAllKilledPeople(characterName: string): Observable<KilledPerson[]>{
    const params = new HttpParams()
      .set('characterName', characterName);
    return this.http.get<KilledPerson[]>(this.charactersUrl + '/all-killed-people', {params});
  }

  public findKillCountPerCategories(characterName: string): Observable<CategoriesKillCount>{
    const params = new HttpParams()
      .set('characterName', characterName);
    return this.http.get<CategoriesKillCount>(this.charactersUrl + '/kill-count-per-category', {params});
  }
}
