import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { ActionEvent, AppDataState, DataStateEnum, UserActionsTypes } from 'src/app/state/user.state';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  users$:Observable<AppDataState<any>> |null=null;
  readonly DataStateEnum=DataStateEnum;


  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {
    
  
    this.users$ = this._userService.getAllUsers().pipe(
        map(data =>{
          console.log("users data >>>", data)
           return  ({dataState:DataStateEnum.LOADED,data:data})
        }),
          
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      )

  }

 onGetAllUsers()
 { 
    this.users$ = this._userService.getAllUsers().pipe(
      map(data =>{
        console.log("users data >>>", data)
        return  ({dataState:DataStateEnum.LOADED,data:data})
      }),
        
      startWith({dataState:DataStateEnum.LOADING}),
      catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    )

 }

  
  onActive(u: any){
    console.log("u>>>", u)
    this._userService.active(u).subscribe(data => {
      console.log("data>>>", data)
       // p.selected= data.selected;
       this.onGetAllUsers();
    })

  }

  
  onActionEvent($event: ActionEvent){
    console.log("user event",$event);
    switch($event.type){
      /*
      case UserActionsTypes.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts();break;
      case UserActionsTypes.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts();break;
      case UserActionsTypes.SEARCH_PRODUCTS: this.onSearch($event.payload);break;
      case UserActionsTypes.NEW_PRODUCT: this.onNewProduct();break;
      */
      case UserActionsTypes.ACTIVE_USER: this.onActive($event.payload);break;
      //case UserActionsTypes.DELETE_PRODUCT: this.onDelete($event.payload);break;
      /*
      case UserActionsTypes.EDIT_PRODUCT: this.onUpdate($event.payload);break;
      */
}
}


  

}
