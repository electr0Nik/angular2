import {Component, OnInit} from '@angular/core';

// import { FormControl, FormGroup } from '@angular/forms';
import {User} from "../../classes/user";
import {FormControl} from "@angular/forms";
import {FormValidator} from "../validator/form.validator";

@Component({
  selector: 'app-register-form-t',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.scss']
})
export class RegisterFormComponent_T implements OnInit {

  user: User = new User();

  birthdateAsYearCtrl: FormControl = new FormControl('', FormValidator.isOldEnoughValidator);

  constructor() {
  }

  ngOnInit() {
  }

  register(user: User) {
    console.log(user);
  }

}
