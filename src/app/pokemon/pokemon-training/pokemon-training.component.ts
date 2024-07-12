import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon.model';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Subject, Subscription, switchMap, takeUntil } from 'rxjs';

@Component({
  selector: 'app-pokemon-training',
  templateUrl: './pokemon-training.component.html',
  styleUrl: './pokemon-training.component.scss'
})
export class PokemonTrainingComponent implements OnInit, OnDestroy {
  pokemon?: Pokemon;
  #audio = new Audio('assets/pokemon-song.mp3');
  #trainingSubscription = new Subscription();
  #destroyable$ = new Subject();

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
    this.#destroyable$.next(undefined);
    this.#destroyable$.complete();
  }

  train() {
    this.#audio.play();
    this.#trainingSubscription = interval(1000).pipe(
      takeUntil(this.#destroyable$),
      switchMap(_ => this.pokemonService.train(this.pokemon!))
    ).subscribe(data => {
      this.pokemon = data;
      console.log('training pokemon', this.pokemon);
    });
  }
}
