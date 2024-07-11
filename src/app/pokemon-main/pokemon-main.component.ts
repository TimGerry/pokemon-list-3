import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { Pokemon } from '../models/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonFormComponent, PokemonListComponent, LoadingComponent],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] | undefined = undefined;

  constructor(private pokemonService: PokemonService, private router: Router) {
    console.log('constructor!');
  }

  ngOnInit(): void {
    console.log('oninit!');
    this.pokemonService.getAll().subscribe(data => this.pokemonList = data);
  }

  navigateToPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.name]);
  }
}
