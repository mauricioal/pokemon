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

  constructor(private pokemonService: PokemonService) { 
    this.blobsPath = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    this.blobsFormat = '.png';
  }

  getPokemones(): void {
    this.pokemonService.getPokemones()
                        .subscribe(
                          pokemones => this.pokemones = pokemones,
                          error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.getPokemones();
  }
}
