import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user/user.service';
import { ActionEvent, AppDataState, DataStateEnum, UserActionsTypes } from 'src/app/state/user.state';
import { AddUserComponent } from '../../add-user/add-user.component';
import { UpdateUserComponent } from '../../update-user/update-user.component';

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
    private _userService:UserService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }




onAddUser()
{
  this.userEventEmitter.emit({
    type: UserActionsTypes.ADD_USER,payload: {}
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
