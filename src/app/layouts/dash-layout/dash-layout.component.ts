import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { UserActionsTypes } from 'src/app/state/user.state';

@Component({
  selector: 'app-dash-layout',
  templateUrl: './dash-layout.component.html',
  styleUrls: ['./dash-layout.component.scss']
})
export class DashLayoutComponent implements OnInit {

 // inputSideNav!: MatSidenav;
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  
 gotohomepage()
 {
   this._router.navigate(['/home'])
 }

  onActionEvent($event: UserActionsTypes)
  {
     switch ($event)
     {
       case UserActionsTypes.GO_TO_APP: this.gotohomepage();break;
     }
  }




}
