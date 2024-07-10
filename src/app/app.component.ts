import { Component } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent, PokemonMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokémon List';
}
