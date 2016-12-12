import {FormControl, FormGroup} from "@angular/forms";


export class FormValidator {

  constructor() {
  }

  static isOldEnoughValidator(control: FormControl) {
    const birthDatePlus18 = new Date(control.value);
    birthDatePlus18.setFullYear(birthDatePlus18.getFullYear() + 18);
    return birthDatePlus18 < new Date() ? null : { tooYoung: true };
  }

  static passwordMatch(group: FormGroup){
    const password = group.controls['password'].value;
    const confirm = group.controls['confirmPassword'].value;
    return password === confirm ? null: {matchingError: true};
  }

}

