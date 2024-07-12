import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, NonNullableFormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { Pokemon, POKEMON_TYPES } from '../models/pokemon.model';
import { catchError, map, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Pokemon>();

  pokemonForm!: FormGroup<PokemonForm>;

  constructor(private nnfb: NonNullableFormBuilder) {
    // this.pokemonForm.valueChanges.subscribe(data => {
    //   console.log(data);
    // });
  }

  ngOnInit(): void {
    this.pokemonForm = this.nnfb.group<PokemonForm>({
      name: this.nnfb.control('mudkip', [Validators.required, Validators.minLength(3)], [this.validPokemon()]),
      type: this.nnfb.control('', [Validators.required, this.typeValidator()]),
      type2: this.nnfb.control(undefined, this.typeValidator()),
      attack: this.nnfb.control('', [Validators.required]),
      level: this.nnfb.control(100, [Validators.required, Validators.min(1), Validators.max(100)]),
    }, {validators: [this.uniqueTypeValidator()]});
    this.pokemonForm.controls.name.disable();
  }
  
  submit() {
    if(! this.pokemonForm.valid) return;
    this.submitted.emit({...this.pokemonForm.getRawValue()});
  }

  log() {
    console.log('form value', this.pokemonForm.value);
    console.log('form raw value', this.pokemonForm.getRawValue());
    console.log('disabled field value', this.pokemonForm.controls.name.value);
  }

  reset() {
    this.pokemonForm.reset();
  }

  typeValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      const type = control.value;
      const valid = !type || POKEMON_TYPES.includes(type);

      return valid ? null : { invalidType: `${type} is not a valid Pokémon type!`};
    }
  }

  uniqueTypeValidator(): ValidatorFn {
    return (group: AbstractControl) => {
      const type = group.get('type')?.value;
      const type2 = group.get('type2')?.value;
      const valid = !type || !type2 || type !== type2

      return valid ? null: { duplicateType: 'Types are not unique!' }
    }
  }

  validPokemon(): AsyncValidatorFn {
    return (control: AbstractControl) => {
      const name = control.value;
      if (!name) return of(null);

      return ajax(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
        map(_ => null),
        catchError(_ => of({ invalidPokemon: `${name} is not an existing Pokémon!`}))
      );
    }
  }
}

type PokemonForm = {
  [P in keyof Pokemon]: FormControl<Pokemon[P]>
}
