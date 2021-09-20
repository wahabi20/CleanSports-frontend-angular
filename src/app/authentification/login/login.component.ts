import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginUserData:any;
  hide: boolean = false;


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  
  loginUser(){ 
  }

  addNewUser(){
    
  }

  confirmEmail(){
    
  }
  
  onLogin(){
  }




}
