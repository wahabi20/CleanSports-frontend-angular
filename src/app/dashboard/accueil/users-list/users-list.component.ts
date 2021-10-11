import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ActionEvent, AppDataState, DataStateEnum, UserActionsTypes } from 'src/app/state/user.state';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

   @Input() usersInput$:Observable<AppDataState<any>> |null=null;
   @Output() userEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

   readonly DataStateEnum=DataStateEnum;
   
  constructor() { }

  ngOnInit(): void {
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
  
  onActionEvent($event: ActionEvent)
  {
    this.userEventEmitter.emit($event)

  }


}
