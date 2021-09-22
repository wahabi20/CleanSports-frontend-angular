import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  loginUserData:any;
  hide: boolean = false;


  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private router: Router) { }

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
    
    if (!this.loginForm.valid) {
      return;
    }
    console.log("login form >>>",this.loginForm.value);

    
    console.log("login form >>>",this.loginForm.value);
    this._auth.loginUser(this.loginForm.value).subscribe(resp => {
      console.log('resp from loginUserData>>>', resp.token);
       localStorage.setItem('token',resp.token)
       //alert("login Successfully");
      this.router.navigate(['users/home']);

   }, err => {
       console.log(err)
   })
  }




}
