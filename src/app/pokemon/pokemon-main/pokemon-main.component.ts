import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss',
})
export class PokemonMainComponent {
  pokemon$: Observable<Pokemon[] | undefined>;

  constructor(private pokemonService: PokemonService, private router: Router) {
    console.log('constructor!');
    this.pokemon$ = this.pokemonService.pokemon$;
  }

  navigateToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.name]);
  }

  add(pokemon: Pokemon) {
    this.pokemonService.add(pokemon);
  }
}
