import {
  inject,
  tick,
  TestBed,
  getTestBed,
  async,
  fakeAsync,
  ComponentFixture
} from '@angular/core/testing';
import { Observable } from 'rxjs/Rx';

import { MockPokemonService } from '../mocks/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from '../services/pokemon.service';
import { POKEMONES } from '../mocks/pokemones'

describe('PokemonListComponent', () => {
  let comp: PokemonListComponent;
  let fixture: ComponentFixture<PokemonListComponent>;
  let mockPokemonService: MockPokemonService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListComponent ]
    }).overrideComponent(PokemonListComponent, {
      set: {
        providers: [
          { provide: PokemonService, useClass: MockPokemonService },
        ]
      }
    }).compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(PokemonListComponent);
      comp = fixture.componentInstance;
      mockPokemonService = fixture.debugElement.injector.get(PokemonService);
    });
  }));

  it('should fetch a collection of pokemones', () => {
    // stub PokemonService for test purposes
    let mockPokemones: Pokemon[] = POKEMONES;
    mockPokemonService.setResponse(mockPokemones);
    fixture.detectChanges();
    // verify service was called
    expect(mockPokemonService.getPokemonesSpy).toHaveBeenCalledWith();
    // verify data was set on component when initialized
    expect(comp.pokemones).toBe(mockPokemones);
    // verify HTML renders as expected
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.pokemon').innerHTML).toBe(POKEMONES[0].name);
    expect(compiled.querySelector('.pokemon').getAttribute('class')).toContain(POKEMONES[0].name);
    expect(compiled.querySelector('.img-responsive').getAttribute('src')).toBe(comp.blobsPath+POKEMONES[0].id+comp.blobsFormat);
  });
});