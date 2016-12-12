/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { RegisterFormComponent_T } from './register-form.component';

describe('RegisterFormComponent_T', () => {
  let component: RegisterFormComponent_T;
  let fixture: ComponentFixture<RegisterFormComponent_T>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RegisterFormComponent_T
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent_T);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
