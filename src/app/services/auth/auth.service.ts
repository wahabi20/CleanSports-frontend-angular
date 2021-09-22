import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from 'src/app/models/model.login';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  



  
loginUser(user:Login){
  console.log("user  from server >>>", user)
  let host= environment.host;
  
  return this.http.post<any>(host+"/cleansports/api/auth/login",user);
}



getToken(){
  return localStorage.getItem('token')
}



}
