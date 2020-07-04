import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CharacterMainInfo} from '../models/characterMainInfo/character-main-info';

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
}
