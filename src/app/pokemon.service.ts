import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Pokemon } from './models/pokemon';
import { POKEMONES } from './mock-pokemones';

@Injectable()
export class PokemonService {
  private pokemonesUrl = 'http://pokeapi.co/api/v2/pokemon/';

  constructor(private http: Http) { }

  getPokemones(): Observable<Pokemon[]> {
    return this.http.get(this.pokemonesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    let pokemones = body.results;
    pokemones.forEach(pokemon => {
      let urlParts:string[] = pokemon.url.split("/");
      pokemon.id = urlParts[urlParts.length-2];
    });
    return pokemones || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  } 
}
