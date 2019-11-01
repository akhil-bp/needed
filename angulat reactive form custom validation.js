validator.ts_________________________________________________________________________________________
import { FormGroup, ValidatorFn, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class RegistrationValidator {
    static validate(registrationFormGroup: FormGroup) {
        let password = registrationFormGroup.controls.password.value;
        let repeatPassword = registrationFormGroup.controls.repeatPassword.value;
        if (repeatPassword.length <= 0) {
            return null;
        }
        if (repeatPassword !== password) {
            return {
                doesMatchPassword: true
            };
        }
        return null;
    }

    static NoWhitespaceValidator(
        regex: RegExp,
        msg: ValidationErrors
    ): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            console.log(control);
            if (control.value && control.value.trim().length === 0) {
                // let isValid = false;
                return msg
            }
        };
    }
}

component.ts_________________________________________________________________________________________
 this.registrationform = this.formBuilder.group({
      shop_name: ['',RegistrationValidator.NoWhitespaceValidator(
        null,
        {
          whitespace: "Write something here" 
        }
      )]
   })
   
 
component.html_________________________________________________________________________________________

<p *ngIf="registrationform.controls.shop_name.errors?.whitespace">{{registrationform.controls.shop_name.errors?.whitespace}}</p>
