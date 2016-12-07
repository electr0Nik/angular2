import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-register-form-t',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent_T implements OnInit {

  password: FormControl;

  form: FormGroup;

  constructor() { }


  ngOnInit() {
  }


  register(user) {
    console.log(user);
  }

}
