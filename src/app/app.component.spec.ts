/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { FooterComponent } from './footer/footer.component';

describe('AppComponent', () => {
  let testHost: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, 
        HeaderComponent,
        SearchBarComponent,
        PokemonListComponent,
        FooterComponent
      ],
    });
    TestBed.compileComponents();
  }));

  beforeEach(() => {
    fixture  = TestBed.createComponent(AppComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });
});