import { Component, OnInit } from '@angular/core';

// import { FormControl, FormGroup } from '@angular/forms';
import {User} from "../../classes/user";

@Component({
  selector: 'app-register-form-t',
  templateUrl: 'register-form.component.html',
  styleUrls: ['register-form.component.scss']
})
export class RegisterFormComponent_T implements OnInit {

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  register(): void {
    console.log(this.user);
  }

}
