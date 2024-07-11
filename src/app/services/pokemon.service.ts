import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  #pokemonList: Pokemon[] = [
    { name: 'garchomp', type: 'ground', type2: 'dragon', attack: 'outrage', level: 60 },
    { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 },
    { name: 'magikarp', type: 'water', attack: 'splash', level: 100 }
  ];

  constructor() { }

  get(): Pokemon[] {
    return [...this.#pokemonList];
  }
}
