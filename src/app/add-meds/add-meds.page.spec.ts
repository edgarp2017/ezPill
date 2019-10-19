import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMedsPage } from './add-meds.page';

describe('AddMedsPage', () => {
  let component: AddMedsPage;
  let fixture: ComponentFixture<AddMedsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMedsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
