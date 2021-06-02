import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { UserService } from './user.service';
import { map } from 'rxjs/operators';

export function uniqueUsernameUpdateValidator(userService: UserService): AsyncValidatorFn{
    return (c: AbstractControl): {[key: string]: boolean} | any => {
        try{
            var currentUsername = JSON.parse(sessionStorage.getItem("currentUser"))["username"];
        }catch(err){
            console.log(err);
        }
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
                })
            )
    }
}