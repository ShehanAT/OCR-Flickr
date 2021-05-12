
import { Validator, NG_ASYNC_VALIDATORS, AbstractControl, AsyncValidatorFn, ValidationErrors, AsyncValidator } from '@angular/forms';
import { Directive, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn{
    return (c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
          return userService.getUserByUsername(c.value).pipe(
        map(users => {
         
            if(users.length === 0){
                 return null;
            }else{
                 return {'uniqueUsername': true};
                
            }
         
        })
    );
}

}
@Directive({
    selector: '[uniqueUsername]',
    providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: UniqueUsernameValidatorDirective, multi: true}]
})
export class UniqueUsernameValidatorDirective implements AsyncValidator{
    

    constructor( private userService: UserService){ }//create the http.post in user.service
    validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>{
        return this.userService.getUserByUsername(control.value).pipe(
        map(users => {
            return users && users.length > 0 ? {'uniqueUsername': true} : null;
        })
        );
    
    } 
}
