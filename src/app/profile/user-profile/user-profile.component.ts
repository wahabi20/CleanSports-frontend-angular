import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  socket:any;
  message:string="";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.getMessages();

  }



  loginForm: FormGroup = this.fb.group({
   
    message: ['', [Validators.required, Validators.minLength(6)]]
  })


/************** Socket test **************** */

getMessages() {
  this.socket = io('http://localhost:3000');
  this.socket.on('connection');
  this.socket.on('message', (data:string) => {
     this.message = data;
  })
}


sendtext()
{
   console.log("message to send " + this.loginForm.value.message);

   this.socket.emit('message', this.loginForm.value.message);
}



/****************************** */




}
