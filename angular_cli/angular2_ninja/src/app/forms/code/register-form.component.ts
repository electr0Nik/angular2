import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {FormValidator} from "../validator/form.validator";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-register-form-c',
  templateUrl: 'register-form-c.component.html',
  styleUrls: ['register-form-c.component.scss']
})
export class RegisterFormComponent_C implements OnInit {

  userForm: FormGroup;
  passwordGroup: FormGroup;
  userNameCtrl: FormControl;
  passwordCtrl: FormControl;
  confirmPasswordCtrl: FormControl;
  birthdateCtrl: FormControl;

  passwordStrength: number = 0;

  constructor(builder: FormBuilder) {
    this.userNameCtrl = builder.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = builder.control('', [Validators.required, Validators.minLength(5)]);
    this.confirmPasswordCtrl = builder.control('', [Validators.required, Validators.minLength(5)]);
    this.birthdateCtrl = builder.control('', [Validators.required, FormValidator.isOldEnoughValidator]);

    this.passwordGroup = builder.group(
      {
        password: this.passwordCtrl,
        confirmPassword: this.confirmPasswordCtrl
      },
      {validator: FormValidator.passwordMatch}
    );

    this.userForm = builder.group({
      username: this.userNameCtrl,
      passwordForm: this.passwordGroup,
      birthDate: this.birthdateCtrl
    });

    // subscribe to every password change
    this.passwordCtrl.valueChanges
    // recompute only when the user stops typing for at least 400ms
      .debounceTime(400)
      // recompute only if the value is different from the last
      .distinctUntilChanged()
      .subscribe(newValue => this.passwordStrength = newValue.length);
  }

  ngOnInit() {
  }

  register_c(): void {
    console.log(this.userForm.value);
  }

  reset(): void {
    this.userNameCtrl.setValue('');
    this.passwordCtrl.setValue('');
    this.birthdateCtrl.setValue('');
  }
}
