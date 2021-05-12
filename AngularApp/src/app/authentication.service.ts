import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';


export interface UserDetails {
    _id: string;
    username: string;
    fullName: string;
    emailAddress: string;
    age: number;
    exp: number;//for checking if user is logged in
    iat: number;
}

interface TokenResponse {
    token?: string;
    error?: string;
}

export interface TokenPayload{
    username: string;
    password: string;
    confirmPassword?: string;
    fullName?: string;
    emailAddress?: string;
    age?: string;
}



@Injectable()
export class AuthenticationService {
    private token: string;
    
    constructor(private http: HttpClient, private router: Router) { }
    private saveToken(token: string): void{
        localStorage.setItem('mean-token', token);
        this.token = token;
    }
 
    private getToken(): string{
        if(!this.token){
            this.token = localStorage.getItem('mean-token');
        }
        return this.token;
    }
    
    public getUserDetails(): UserDetails{//UserDetails interface object is the params
        const token = this.getToken();
        let payload;
        if(token){
            payload = token.split('.')[1]//split the string token and store the second parameter in payload(guessing its the password)
            payload = window.atob(payload);//decoding the password 
            return JSON.parse(payload);//returning the decoded password in json format
            
        }else{
            return null;//if token not found return null
        }
    }
    
    public isLoggedIn(): boolean{ //boolean is the params
        
        const user = this.getUserDetails();
        if(user){
            return user.exp > Date.now() / 1000;//return true if session has not expired, meaning user is still logged in
        }else{
            return false;
        }
    }
    
    private request(method: 'post'|'get', type:'login'|'register'|'profile', user?: TokenPayload): Observable<any>{
        let base;//
        if(method === 'post'){
            base = this.http.post(`/api/${type}`, user);//posting request to login, register or profile depending on the $type
            
        }else{//if not post, it is a get request
            base = this.http.get(`/api/${type}`, { headers: {Authorization: `Bearer ${this.getToken()}`}});//sending encrypted password as value
          
            
        }
        
        const request = base.pipe(//sending the result of the post/get request to TokenResponse interface and saving the result in it's token prop
            map((data: TokenResponse ) => {
                
                if(data.token){
                    this.saveToken(data.token);
                }   
                return data;   
            })
        );
     
        return request;//return json response in request variable
        
    }
    
    public register(user: TokenPayload): Observable<any>{
  
        return this.request('post', 'register', user);//sending register post request to request()
    }
    
    public login(user: TokenPayload): Observable<any>{
        return this.request('post', 'login', user);//sending login post request to request()
    }
    
    public profile(): Observable<any>{//observable<any> ?
        return this.request('get', 'profile');
    }
    
    public logout(): void{
        this.token = '';
        window.localStorage.removeItem('mean-token');
        this.router.navigateByUrl('/');
    }
}
