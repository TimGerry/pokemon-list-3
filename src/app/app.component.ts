import { Component, Inject } from '@angular/core';
import { ShopComponent } from './shop/shop.component';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { APP_TITLE } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShopComponent, PokemonMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(APP_TITLE) public title: string) {}
}
