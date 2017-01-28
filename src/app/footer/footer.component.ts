import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  copyright: string;

  constructor() { 
    this.copyright = '© The Pokemon Company';
  }

  ngOnInit() {
  }

}
