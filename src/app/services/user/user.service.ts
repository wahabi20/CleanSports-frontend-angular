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
}
