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


  motCle:string="";
  currentPage:number=0;
  currentPerPage:number=5;
  limit:number=5;
  pages = new Array();
  pageSizeOptions=[5, 10, 25];





  constructor(private _userService: UserService, private _router:Router) { }

  ngOnInit(): void {
    
  
    this.users$ = this._userService.getUsers(this.motCle,this.currentPage, this.limit).pipe(
        map(data =>{
          console.log("users dataeeee >>>", data)
          this.pages= new Array(data[0].total_pages);
           return  ({dataState:DataStateEnum.LOADED,data:data[0].result})
        }),
          
        startWith({dataState:DataStateEnum.LOADING}),
        catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
      )

  }


  doSearch(){
  
      this.users$ =  this._userService.getUsers(this.motCle,this.currentPage, this.limit).pipe(
      map(data =>{
        console.log("do search user data >>>", data[0].result)
   
        this.pages= new Array(data[0].total_pages);
        
        return  ({dataState:DataStateEnum.LOADED,data:data[0].result})
      }),
        
       startWith({dataState:DataStateEnum.LOADING}),
       catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    )
  
}





  gotoPage(i:number){
    console.log("current page >>>",  this.currentPage=i)
    this.currentPage=i;
    this.doSearch();
  }

  goToPreviousPage(){
    console.log("previouspage >>>",this.currentPage)
    this.currentPage = --this.currentPage;
    this.doSearch();
   }
  
   goToNextPage(){
     console.log("next page >>>",this.currentPage)
    this.currentPage = ++this.currentPage;
    this.doSearch();
   }


   gotoPerPage(perPage:number){
    console.log("perpage>>>", perPage)
    this.currentPerPage=perPage;
    this.limit=perPage;
    this.doSearch();
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


  onDelete(user:any){
    let confirm = window.confirm("Est vous sure ?")
    if(confirm){
    this._userService.deleteUser(user).subscribe(data => {
       this.onGetAllUsers();
    })}
     
  }

  onSearch(motClet:any){
    this.users$ =  this._userService.getUsers(motClet,this.currentPage, this.limit).pipe(
      map(data =>{
        console.log("do search user data >>>", data[0].result)
   
        this.pages= new Array(data[0].total_pages);
        
        return  ({dataState:DataStateEnum.LOADED,data:data[0].result})
      }),
        
       startWith({dataState:DataStateEnum.LOADING}),
       catchError(err=>of({dataState:DataStateEnum.ERROR, errorMessage:err.message}))
    )}

  
  onActionEvent($event: ActionEvent){
    console.log("user event",$event);
    switch($event.type){

       case UserActionsTypes.ACTIVE_USER: this.onActive($event.payload);break;
       case UserActionsTypes.DELETE_USER: this.onDelete($event.payload);break;
       case UserActionsTypes.Go_TO_PAGE: this.gotoPage($event.payload);break;
       case UserActionsTypes.Go_TO_PREVIOS_PAGE: this.goToPreviousPage();break;
       case UserActionsTypes.Go_TO_NEXT_PAGE: this.goToNextPage();break;
       case UserActionsTypes.Go_TO_PER_PAGE: this.gotoPerPage($event.payload);break;
       case UserActionsTypes.SEARSH_USER: this.onSearch($event.payload);break;
     }
}


  

}
