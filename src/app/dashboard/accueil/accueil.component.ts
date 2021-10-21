import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';
import { ActionEvent, AppDataState, DataStateEnum, UserActionsTypes } from 'src/app/state/user.state';
import { AddUserComponent } from '../add-user/add-user.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

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





  constructor(
     private _userService: UserService,
     public dialog: MatDialog,
     private _router: Router,
     private _snackBar: MatSnackBar

     ) { }

 
 
 
 
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
       this.onGetAllUsers();
    })

  }


  onDelete(user:any){
    let confirm = window.confirm("Est vous sure ?")
    if(confirm){
    this._userService.deleteUser(user).subscribe(data => {
      this._snackBar.open("Utilisateur supprimer avec success",'', {
        duration: 2000,
       
        panelClass: ['mat-toolbar','mat-accent']
    });
       this.doSearch();
    }, err => {
         
      console.log("this error>>>", err.error)
      this._snackBar.open("Utilisateur ne supprimer pas"+ `${err.error}`,'', {
        duration: 3000,
       
        panelClass: ['mat-toolbar','mat-warn']
    })
  }
    )} 

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



 onUpdate(user:any)
    {
      console.log("user updayted>>>", user)
      const dialogRef = this.dialog.open(UpdateUserComponent, {
        width: '990px',
        height:'600px',
        data:{
          first_Name: user.first_Name ,
          last_Name: user.last_Name,
          address: user.address,
          isAdmin: user.isAdmin,
          email: user.email,
          date:user.dateOfBirth,
          password:user.password,
          passwordConfirme:user.password_Confirm,
          phone:user.phone_Number,
          pts:user.pts
        }
      });
      /* get*/
      dialogRef.afterClosed().subscribe(result => {
        console.log("data from dialog >>>", result)
        if(result.isAdmin == "1")
        {
           result.isAdmin = true;
        }else{
          result.isAdmin = false;
        }
    
          let dataUser = {
            "first_Name": result.first_Name,
            "last_Name": result.last_Name,
            "email": result.email,
            "password": result.password,
            "password_Confirm": result.passwordConfirme,
            "address":result.address,
            "dateOfBirth": result.date,
            "phone_Number":result.phone,
            "isAdmin":result.isAdmin,
            "pts":result.pts,
            "_id":user._id
          }
         
        this._userService.updateUser(dataUser).subscribe(resp =>{
            
                 console.log('resp of user dialog>>>', resp);
                 
                 this._snackBar.open("Utilisateur modifier avec success",'', {
                  duration: 2000,
                 
                  panelClass: ['mat-toolbar','mat-accent']
              });
            
              this.doSearch();
    
        }, err => {
         
                  console.log("this error>>>", err.error)
                  this._snackBar.open("Utilisateur ne pas modifier "+ `${err.error}`,'', {
                    duration: 2000,
                   
                    panelClass: ['mat-toolbar','mat-warn']
                });
              })
    
    
       
    
    
       
      });
    }


 onAddUser()
    {
        
      
      const dialogRef = this.dialog.open(AddUserComponent, {
        width: '990px',
        height:'600px',
        data:{
        
        }
      });
      /* get*/
      dialogRef.afterClosed().subscribe(result => {
        console.log("data from dialog >>>", result)
        if(result.isAdmin == "1")
        {
           result.isAdmin = true;
        }else{
          result.isAdmin = false;
        }
  
          let dataUser = {
            "first_Name": result.first_Name,
            "last_Name": result.last_Name,
            "email": result.email,
            "password": result.password,
            "password_Confirm": result.passwordConfirme,
            "address":result.address,
            "dateOfBirth": result.date,
            "phone_Number":result.phone,
            "isAdmin":result.isAdmin,
            "pts": result.pts
          }
         
        this._userService.addUser(dataUser).subscribe(resp =>{
            
                 console.log('resp of user dialog>>>', resp);
                 this._snackBar.open("user created sucessfully",'', {
                  duration: 2000,
                 
                  panelClass: ['mat-toolbar','mat-accent']
              });
              this.doSearch();
        
  
        }, err => {
         
                  console.log("this error>>>", err.error)
                  this._snackBar.open("Utilisateur ne pas creer "+ `${err.error}`,'', {
                    duration: 3000,
                   
                    panelClass: ['mat-toolbar','mat-warn']
                });
              })
  
  
       
  
  
       
      });
  
    
    }
  
  




  
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
       case UserActionsTypes.EDIT_USER: this.onUpdate($event.payload);break;
       case UserActionsTypes.ADD_USER: this.onAddUser();break;
     }
}


  

}
