import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { BehaviorSubject, delay, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PokemonService {

  baseUrl = 'http://localhost:3000/pokemon';

  #pokemonSubject = new BehaviorSubject<Pokemon[] | undefined>(undefined);
  public pokemon$ = this.#pokemonSubject.asObservable();

  constructor(private http: HttpClient) {
    this.load();
  }

  get(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseUrl}/${name}`);
  }

  add(pokemonToAdd: Pokemon) {
    this.http.post<void>(this.baseUrl, { id: pokemonToAdd.name, ...pokemonToAdd })
    .subscribe(() => this.load());
  }

  train(pokemonToTrain: Pokemon): Observable<Pokemon> {
    return this.http.put<Pokemon>(`${this.baseUrl}/${pokemonToTrain.name}`, { ...pokemonToTrain, level: pokemonToTrain.level + 1 })
      .pipe(
        tap(() => this.load())
      );
  }

  private load() {
    this.http.get<Pokemon[]>(this.baseUrl)
    .pipe(delay(1000))
    .subscribe(data => this.#pokemonSubject.next(data));
  }
}
