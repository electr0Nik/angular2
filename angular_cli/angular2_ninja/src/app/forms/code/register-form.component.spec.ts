/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterFormComponent_C } from './register-form.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('RegisterFormCodeDrivenComponent', () => {
  let component: RegisterFormComponent_C;
  let fixture: ComponentFixture<RegisterFormComponent_C>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFormComponent_C ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent_C);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
