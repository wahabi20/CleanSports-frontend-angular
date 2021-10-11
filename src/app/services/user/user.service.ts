import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private _router:Router) { }


   
getUsers(name:string, page:number, limit: number): Observable<any>{
  const pages = page + 1;
  let host= environment.host;
  return this.http.get(host+'/cleansports/api/users/searchuser?page=' + pages +'&limit='+ limit +'&name='+ name);
}

getRandomUsers(name:string, page:number, limit: number): Observable<any>{
  const pages = page + 1;
  let host= environment.host;
  return this.http.get(host+'/cleansports/api/users/searchuser?page=' + pages +'&limit='+ limit +'&name='+ name);
}




getAllUsers():Observable<any>{
 
 let host= environment.host;
 return this.http.get<any>(host+'/cleansports/api/users');
}




active(user:any): Observable<any>{
  console.log("user>>>", user)
 let host=environment.host;
  const newData = {"isActive":!user.isActive};

 return this.http.put<any>(host+"/cleansports/api/users/status/"+user._id,newData);
}



}
