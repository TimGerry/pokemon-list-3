import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { LoadingComponent } from '../loading/loading.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-training',
  standalone: true,
  imports: [LoadingComponent],
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit, OnDestroy {
  pokemon?: Pokemon;
  #audio = new Audio('assets/pokemon-song.mp3');

  // @Input() set name(name: string) {
  //   this.pokemonService.get(name).subscribe(data => this.pokemon = data);
  // }

  constructor(private pokemonService: PokemonService, private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.activedRoute.params.pipe(
    //   switchMap(params => this.pokemonService.get(params['name']))
    // ).subscribe(data => this.pokemon = data);
    this.activedRoute.data.subscribe((data: any) => this.pokemon = data.pokemon);
  }

  ngOnDestroy(): void {
    console.log('destroyed!');
    this.#audio.pause();
  }

  train() {
    this.#audio.play();
  }
}
