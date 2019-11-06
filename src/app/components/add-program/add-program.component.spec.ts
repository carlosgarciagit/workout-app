import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgramComponent } from './add-program.component';

describe('AddProgramComponent', () => {
  let component: AddProgramComponent;
  let fixture: ComponentFixture<AddProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProgramComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
