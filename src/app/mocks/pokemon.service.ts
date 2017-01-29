import { SpyObject } from './helper';
import { PokemonService } from '../services/pokemon.service';
import Spy = jasmine.Spy;
export class MockPokemonService extends SpyObject {
  getPokemonesSpy: Spy;
  fakeResponse: any;
  constructor() {
    super( PokemonService );
    this.fakeResponse = null;
    this.getPokemonesSpy = this.spy('getPokemones').andReturn(this);
  }
  subscribe(callback: any) {
    callback(this.fakeResponse);
  }
  setResponse(json: any): void {
    this.fakeResponse = json;
  }
}