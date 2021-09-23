import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/model.login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private _router:Router) { }

  



  
loginUser(user:Login){
  console.log("user  from server >>>", user)
  let host= environment.host;
  
  return this.http.post<any>(host+"/cleansports/api/auth/login",user);
}

 
registerUser(user:any){
  console.log("register  from server >>>", user)
  let host= environment.host;
  return this.http.post<any>(host+"/cleansports/api/users/register",user);
}


getToken(){
  return localStorage.getItem('token')
}

logoutUser(){
  localStorage.removeItem('token');
  this._router.navigate(['users/login']);
}


loggedIn(){
  //if the token exist in the localstorge return true else return false 
  return !!localStorage.getItem('token');
}



forgetPassowrd(email:string){
  let host= environment.host;
  return this.http.put<any>(host+"/cleansports/api/users/forgot-password",email);
}

}
