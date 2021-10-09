import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserActionsTypes } from 'src/app/state/user.state';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


   @Input() inputSideNav!: MatSidenav; 

   @Output() userEventEmitter: EventEmitter<any> = new EventEmitter();
   

  constructor(private _router: Router, public _authService:AuthService) { }

  ngOnInit(): void {
  }


  gotohomepage()
  {
    console.log("test headre comp")
    this.userEventEmitter.emit(UserActionsTypes.GO_TO_APP);
  }

}
