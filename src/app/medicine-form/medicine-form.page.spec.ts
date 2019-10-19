import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineFormPage } from './medicine-form.page';

describe('MedicineFormPage', () => {
  let component: MedicineFormPage;
  let fixture: ComponentFixture<MedicineFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
