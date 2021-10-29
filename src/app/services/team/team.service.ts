import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http:HttpClient, private _router:Router) { }




  addTeam(data:any)
{
  let host=environment.host;
  return this.http.post<any>(host+"/cleansports/api/team/add",data);

}


getTeam()
{
  let host=environment.host;
  return this.http.get<any>(host+"/cleansports/api/team/list");

}


}
