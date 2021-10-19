import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ActionEvent, AppDataState, DataStateEnum, UserActionsTypes } from 'src/app/state/user.state';
import { AddUserComponent } from '../../add-user/add-user.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

   @Input() usersInput$:Observable<AppDataState<any>> |null=null;
   @Input() pages= new Array();
   @Input() pageSizeOptions= new Array();
   @Input() currentPage:number=0;
   @Input() currentPerPage:number=5;
   @Output() userEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

   readonly DataStateEnum=DataStateEnum;
   motCle:string="";
   

   



  constructor(
    public dialog: MatDialog,
    private _router: Router,
    private _userService:UserService
  ) { }

  ngOnInit(): void {
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
          "isAdmin":result.isAdmin
        }
       
      this._userService.addUser(dataUser).subscribe(resp =>{
          try{
               console.log('resp of user dialog>>>', resp);
               this._router.navigate(['/Dashboard']);

          }catch(ex){
             console.log('error', ex);

          }


      })


      console.log("Your Name name: " + result.name);
      console.log("Your Name email: " + result.email);
      console.log("Your Name address: " + result.address);
      console.log("Your Name role: " + result.role);
      console.log("Your password: " + result.password);
      console.log("Your password confirmd: " + result.passwordConfirmed);
    });

  
  }







  gotoPage(i:number)
  {
    this.userEventEmitter.emit({
      type: UserActionsTypes.Go_TO_PAGE,payload: i
     });
  }



  goToPreviousPage()
  {
    this.userEventEmitter.emit({
      type: UserActionsTypes.Go_TO_PREVIOS_PAGE,payload: {}
     });
  }

  goToNextPage()
  {
    this.userEventEmitter.emit({
      type: UserActionsTypes.Go_TO_NEXT_PAGE,payload: {}
     });
  }

  gotoPerPage(p:number)
  {
     console.log("perpage user list>>", p)
    this.userEventEmitter.emit({
      type: UserActionsTypes.Go_TO_PER_PAGE,payload: p
     });
  }
   
  onActive(u: any){
    console.log("user-list>>>",u)
     this.userEventEmitter.emit({
       type: UserActionsTypes.ACTIVE_USER,payload: u
      });
  }


  onDelete(u:any){
    this.userEventEmitter.emit({
      type: UserActionsTypes.DELETE_USER,payload: u
     });
  }

  onUpdate(u:any){
    this.userEventEmitter.emit({
      type: UserActionsTypes.EDIT_USER,payload: u
     });
  }


  onSearch(){
    this.userEventEmitter.emit({type:UserActionsTypes.SEARSH_USER, payload:this.motCle});
   
  }

  
  
  onActionEvent($event: ActionEvent)
  {
    this.userEventEmitter.emit($event)

  }


}
