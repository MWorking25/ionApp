import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestroPage } from './restro.page';

describe('RestroPage', () => {
  let component: RestroPage;
  let fixture: ComponentFixture<RestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
