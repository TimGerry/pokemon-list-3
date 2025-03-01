import { Component, Inject } from '@angular/core';
import { APP_TITLE } from './app.config';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PokemonModule } from './pokemon/pokemon.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, PokemonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(@Inject(APP_TITLE) public title: string) {}
}
