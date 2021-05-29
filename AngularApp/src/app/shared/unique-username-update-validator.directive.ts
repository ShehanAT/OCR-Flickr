import { Validator, NG_ASYNC_VALIDATORS, AbstractControl, ValidatorFn, AsyncValidatorFn } from '@angular/forms';
import { Directive } from '@angular/core';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

 
@Directive({
    selector: '[uniqueUsernameUpdate]',
    providers: [{ 
        provide: NG_ASYNC_VALIDATORS, 
        useExisting: UniqueUsernameUpdateValidatorDirective, 
        multi: true
    }]
})
export function uniqueUsernameUpdateValidator(userService: UserService): AsyncValidatorFn{
    return (c: AbstractControl): {[key: string]: boolean} | any => {
        var currentUsername = JSON.parse(sessionStorage.getItem("currentUser"))["username"];
        return userService.getUserByUsername(c.value)
            .pipe(
                map(user => {
                if(user.length > 0){
                    var username = user[0]["username"];
                    if(username != currentUsername){
                        return {'uniqueUsernameUpdate': true}
                    }else{
                        return null;
                    }
                }else{
                    return null;
                }
                // console.log("currentUsername: " + currentUsername);
                // if(username.length > 0 && username != currentUsername){
                //     // console.log('unique name: false');
                //     return {'uniqueUsernameUpdate': true}
                // }else{
                //     // console.log('unique name: true');
                //     return null

                // }
                })
            )
    }
}

export class UniqueUsernameUpdateValidatorDirective implements Validator{
    

    constructor( private userService: UserService){ }//create the http.post in user.service

    validate(control: AbstractControl): {[key: string]: any} | null {
        var result = this.userService.getUserByUsername(control.value);
        console.log(result);
        return result ? {'uniqueUsernameUpdate': true} : null;
    
    } 
}