import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilitiestryPage } from './facilitiestry.page';

describe('FacilitiestryPage', () => {
  let component: FacilitiestryPage;
  let fixture: ComponentFixture<FacilitiestryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilitiestryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilitiestryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
