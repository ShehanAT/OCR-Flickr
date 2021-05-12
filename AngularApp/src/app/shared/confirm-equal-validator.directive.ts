import { Validator, NG_VALIDATORS, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';

export function compareValidator(controlNameToCompare: string): ValidatorFn{
    return (c: AbstractControl): ValidationErrors | null => {
        if(c.value == null || c.value.length === 0){
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if(controlToCompare){
        const subscription: Subscription = controlToCompare.valueChanges.subscribe(() => {
            c.updateValueAndValidity();
            subscription.unsubscribe();
        });
        }
        return controlToCompare && controlToCompare.value !== c.value ? { 'compare' : true} : null;
    
    };
}




@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})


export class ConfirmEqualValidatorDirective implements Validator{
    @Input() appConfirmEqualValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {//provided by NG_VALIDATORS
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);//getting password field text
        if(controlToCompare && controlToCompare.value !== control.value){
            return { 'notEqual': true };
        }
        return null;//confirm and password are equal 
        
    }

}