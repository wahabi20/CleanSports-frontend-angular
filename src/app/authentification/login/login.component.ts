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

  
  
  hide: boolean = true;
  isLoading = false;
  error: string = "";
  

  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router,
              ) { }

  ngOnInit(): void {
  }

  
  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  emailConfirm()
  {
    this._router.navigate(['/emailconfirm']);
  }

  addNewUser(){
    this._router.navigate(['/register']);
  }

 
  onLogin(){
    
    if (!this.loginForm.valid) {
      return;
    }

     this.isLoading = true;
    console.log("login form >>>",this.loginForm.value);
    let dataUser = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    }
  
    this._auth.loginUser(dataUser).subscribe(resp => {
      console.log('resp from loginUserData>>>', resp);
      this.isLoading = false;
       localStorage.setItem('token',resp.token)
       localStorage.setItem('isAdmin',resp.user.isAdmin);
       localStorage.setItem('id',resp.user._id);
       //alert("login Successfully");
       this._router.navigate(['/home']);

   }, err => {
       console.log(err);
       this.isLoading = false ;
       this.error = err.error;
       console.log("this error>>>", this.error)
       
   })
  }




}
