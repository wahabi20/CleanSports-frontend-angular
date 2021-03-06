import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

getUsersTeam(name:string): Observable<any>{
 
  let host= environment.host;
  return this.http.get(host+'/cleansports/api/users/searchuser?name='+ name);
}







getUserNames()
{
  let host= environment.host;
 return this.http.get<any>(host+'/cleansports/api/users')
 .pipe(
   map((response:[]) => response.map(item => item['first_Name']))
 )
}


active(user:any): Observable<any>{
  console.log("user>>>", user)
 let host=environment.host;
  const newData = {"isActive":!user.isActive};

 return this.http.put<any>(host+"/cleansports/api/users/status/"+user._id,newData);
}



deleteUser(user:any): Observable<void>{
  console.log("product>>>", user)
 let host=environment.host;
 return this.http.delete<void>(host+"/cleansports/api/users/"+user._id);
}



usersStatistic(){
  let host=environment.host;
  return this.http.get(host+"/cleansports/api/statisticals/users");
}


addUser(data:any)
{
  let host=environment.host;
  return this.http.post<any>(host+"/cleansports/api/users/register",data);

}

updateUser(user:any)
{
  let host=environment.host;
  return this.http.put<any>(host+"/cleansports/api/users/"+user._id,user);
}

}
