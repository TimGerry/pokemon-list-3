import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon List';
  pokemonList: Pokemon[] = [
    { name: 'garchomp', type: 'ground', type2: 'dragon', attack: 'outrage', level: 60 },
    {name: 'squirtle', type: 'water', attack: 'water gun', level: 5 },
    { name: 'magikarp', type: 'water', attack: 'splash', level: 100 }
  ]

  attack(pokemon: Pokemon) {
    window.alert(`${pokemon.name} used ${pokemon.attack}`);
  }
}
