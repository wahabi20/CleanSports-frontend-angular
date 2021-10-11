import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActionEvent, UserActionsTypes } from 'src/app/state/user.state';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input()  user:any|null=null;
  @Output() userEventEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  
  onActive(user: any){
    console.log("user-item>>>",user)
    this.userEventEmitter.emit({type:UserActionsTypes.ACTIVE_USER,payload:user})
    
 }


 onDelete(user: any){
   this.userEventEmitter.emit({type:UserActionsTypes.DELETE_USER,payload:user});
   
 }

 onUpdate(user: any){
   this.userEventEmitter.emit({type:UserActionsTypes.EDIT_USER,payload:user});
   
 }

 onAdd(user:any)
 {
   this.userEventEmitter.emit({type:UserActionsTypes.EDIT_USER,payload:user});
 }




}
