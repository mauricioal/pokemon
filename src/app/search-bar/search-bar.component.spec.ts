/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SearchBarComponent } from './search-bar.component';

describe('JumbotronComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display original placeholder', () => {
    de = fixture.debugElement.query(By.css('.form-control'));
    el = de.nativeElement;
    expect(el.getAttribute('placeholder')).toEqual(component.placeholder);
  });

  it('should display a different placeholder', () => {
    de = fixture.debugElement.query(By.css('.form-control'));
    el = de.nativeElement;
    component.placeholder = 'What to search for...';
    fixture.detectChanges();
    expect(el.getAttribute('placeholder')).toEqual('What to search for...');
  });

  it('should display original button label', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
    expect(el.textContent).toEqual(component.buttonLabel);
  });

  it('should display a different button label', () => {
    de = fixture.debugElement.query(By.css('button'));
    el = de.nativeElement;
    component.buttonLabel = 'Search';
    fixture.detectChanges();
    expect(el.textContent).toEqual('Search');
  });
});
