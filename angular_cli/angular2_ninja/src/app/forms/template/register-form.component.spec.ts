/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegisterFormComponent_T } from './register-form.component';

// exclude for now
xdescribe('RegisterFormComponent_T', () => {
  let component: RegisterFormComponent_T;
  let fixture: ComponentFixture<RegisterFormComponent_T>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterFormComponent_T]
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
