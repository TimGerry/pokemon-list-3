import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = 'http://localhost:3000/pokemon';

  constructor(private http: HttpClient) { }

  get(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.baseUrl);
  }
}
