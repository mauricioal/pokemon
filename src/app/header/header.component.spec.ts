/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeaderComponent } from './header.component';

describe('NavbarComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('img'));
    el = de.nativeElement;
  });

  it('should display original image', () => {
    expect(el.getAttribute('src')).toContain(component.logoPath);
  });

  it('should display a different image', () => {
    component.logoPath = './assets/img/bg-pokemon.jpg';
    fixture.detectChanges();
    expect(el.getAttribute('src')).toContain('./assets/img/bg-pokemon.jpg');
  });

});
