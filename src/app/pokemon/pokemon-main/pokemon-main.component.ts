import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-main',
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss',
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] | undefined = undefined;

  constructor(private pokemonService: PokemonService, private router: Router) {
    console.log('constructor!');
  }

  ngOnInit(): void {
    console.log('oninit!');
    this.load();
  }

  navigateToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.name]);
  }

  add(pokemon: Pokemon) {
    this.pokemonService.add(pokemon).subscribe(() => this.load());
  }

  private load() {
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
  }
}
