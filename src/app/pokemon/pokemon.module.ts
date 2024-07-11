import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonMainComponent } from './pokemon-main/pokemon-main.component';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonTrainingComponent } from './pokemon-training/pokemon-training.component';
import { LoadingComponent } from '../loading/loading.component';
import { OptionalPipe } from '../pipes/optional.pipe';



@NgModule({
  declarations: [PokemonMainComponent, PokemonFormComponent, PokemonListComponent, PokemonTrainingComponent],
  imports: [
    CommonModule, LoadingComponent, OptionalPipe
  ]
})
export class PokemonModule { }
