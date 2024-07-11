import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OptionalPipe } from '../pipes/optional.pipe';
import { Pokemon } from '../models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [OptionalPipe],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  @Input() pokemonList: Pokemon[] = [];
  @Output() clickPokemon = new EventEmitter<Pokemon>();

  pokemonClicked(pokemon: Pokemon) {
    this.clickPokemon.emit(pokemon);
  }
}