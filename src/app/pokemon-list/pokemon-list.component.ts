import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  errorMessage: string;
  pokemones: Pokemon[];
  blobsPath: string;
  blobsFormat: string;
  page: number;

  constructor(private pokemonService: PokemonService) { 
    this.blobsPath = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    this.blobsFormat = '.png';
    this.page = 1;
    this.pokemones = [];
  }

  getPokemones(): void {
    this.pokemonService.getPokemones(this.page)
                        .subscribe(
                          pokemones => this.pokemones = this.pokemones.concat(pokemones),
                          error => this.errorMessage = <any>error);
  }

  onLoadMore(): void {
    this.page ++;
    this.getPokemones();
  }

  ngOnInit(): void {
    this.getPokemones();
  }
}
