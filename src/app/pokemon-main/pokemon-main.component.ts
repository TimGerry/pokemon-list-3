import { Component, OnInit } from '@angular/core';
import { PokemonFormComponent } from '../pokemon-form/pokemon-form.component';
import { PokemonListComponent } from '../pokemon-list/pokemon-list.component';
import { LoadingComponent } from '../loading/loading.component';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-main',
  standalone: true,
  imports: [PokemonFormComponent, PokemonListComponent, LoadingComponent],
  templateUrl: './pokemon-main.component.html',
  styleUrl: './pokemon-main.component.scss'
})
export class PokemonMainComponent implements OnInit {
  pokemonList: Pokemon[] | undefined = undefined;

  constructor() {
    console.log('consturcotr!');
  }

  ngOnInit(): void {
    console.log('oninit!');
    setTimeout(() => {
      this.pokemonList = [
        { name: 'garchomp', type: 'ground', type2: 'dragon', attack: 'outrage', level: 60 },
        {name: 'squirtle', type: 'water', attack: 'water gun', level: 5 },
        { name: 'magikarp', type: 'water', attack: 'splash', level: 100 }
      ];
    }, 2000);
  }

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}`);
  }
}
