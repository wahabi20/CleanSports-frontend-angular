import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  
  gotousers()
  {
    this._router.navigate(['/users'])
  }
  
  gotohome()
  {
     this._router.navigate(['/Dashboard'])
  }

  gotohomepage()
  {
     this._router.navigate(['/home'])
  }

}
