import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { PokemonMainComponent } from './pokemon-main.component';
import { PokemonService } from '../services/pokemon.service';

fdescribe('PokemonMainComponent', () => {
  let component: PokemonMainComponent;
  let fixture: ComponentFixture<PokemonMainComponent>;
  let nativeEl: HTMLElement;
  let pokemonService: PokemonService

  const pokemonList = [
    { name: 'charmander', type: 'fire', attack: 'ember', level: 5 },
    { name: 'squirtle', type: 'water', attack: 'water gun', level: 5 },
    { name: 'bulbasaur', type: 'grass', type2: 'poison', attack: 'razor leaf', level: 6 },
    { name: 'pikachu', type: 'electric', attack: 'thundershock', level: 7 }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonMainComponent]
    })
    .compileComponents();

    pokemonService = TestBed.inject(PokemonService);

    fixture = TestBed.createComponent(PokemonMainComponent);
    component = fixture.componentInstance;
    nativeEl = fixture.nativeElement;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display pokémon', async () => {
    spyOn(pokemonService, 'get').and.returnValue(pokemonList);

    fixture.detectChanges();
    await fixture.whenStable();

    let actualRows = nativeEl.querySelectorAll('tbody > tr');
    expect(actualRows).toHaveSize(4);
  });

  // when test fails it fails in afterAll instead of in test
  it('should run async 1', () => {
    const p = new Promise(res => {
      setTimeout(() => res(42));
    });
    p.then(num => expect(num).toBe(42));
  });

  // fails normally
  it('should run async', async () => {
    const p = new Promise(res => setTimeout(() => res(42)));
    const num = await p;
    expect(num).toBe(42);
  });

  it('should run async with fakeAsync', fakeAsync(() => {
    //                                    👆
    let val = 0;
    setTimeout(() => (val = 42), 100000);
    setTimeout(() => (val = 0), 200000);
    tick(100000);
    expect(val).toBe(42);
    tick(100000);
    expect(val).toBe(0);
  }));
});
