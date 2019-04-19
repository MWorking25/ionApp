import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelphotosComponent } from './hotelphotos.component';

describe('HotelphotosComponent', () => {
  let component: HotelphotosComponent;
  let fixture: ComponentFixture<HotelphotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelphotosComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelphotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
