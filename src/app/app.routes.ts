import { Routes } from '@angular/router';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { ShopComponent } from './shop/shop.component';
import { PokemonTrainingComponent } from './pokemon-training/pokemon-training.component';
import { pokemonResolver } from './resolvers/pokemon.resolver';
import { moneyGuard } from './guards/money.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'pokemon', pathMatch: 'full'},
    { path: 'pokemon', component: PokemonMainComponent },
    { path: 'pokemon/:name', component: PokemonTrainingComponent, resolve: { pokemon: pokemonResolver } },
    { path: 'shop', component: ShopComponent, canActivate: [ moneyGuard ] }
];
