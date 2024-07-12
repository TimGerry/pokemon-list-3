import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] | null | undefined = [];
  @Output() clickPokemon = new EventEmitter<Pokemon>();

  pokemonClicked(pokemon: Pokemon) {
    this.clickPokemon.emit(pokemon);
  }
}
