import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  placeholder: string;
  buttonLabel: string;

  constructor() { 
    this.placeholder = "Search for...";
    this.buttonLabel = "Go!"
  }

  ngOnInit() {
  }

}
