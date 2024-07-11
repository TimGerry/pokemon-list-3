import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { Pokemon } from '../models/pokemon.model';
import { inject } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

export const pokemonResolver: ResolveFn<Pokemon> = (route: ActivatedRouteSnapshot, state) => {
  let service = inject(PokemonService);
  return service.get(route.paramMap.get('name')!);
};
