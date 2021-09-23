import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  loginUserData:any;
  hide: boolean = false;
  isLoading = false;
  message: string = "";
  error: string = "";
  
  constructor(private fb: FormBuilder,
    private _auth: AuthService,
    private _router: Router,
    ) { }

  ngOnInit(): void {
  }


  
  registerForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(6)]],
    lastname: ['', [Validators.required, Validators.minLength(6)]],
    address: ['', [Validators.required, Validators.minLength(6)]],
    date: ['', [Validators.required, Validators.minLength(6)]],
    phone: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]]
  })



  
  gotologinUser()
  { 
    this._router.navigate(['users/login']);
  }


  onRegister()

  {console.log(" register form >>>",this.registerForm.value);


    
    if (!this.registerForm.valid) {
      return;
    }

     this.isLoading = true;
   
    let dataUser = {
      "first_Name": this.registerForm.value.name,
      "last_Name": this.registerForm.value.lastname,
      "email": this.registerForm.value.email,
      "password": this.registerForm.value.password,
      "password_Confirm": this.registerForm.value.passwordConfirm,
      "address":this.registerForm.value.address,
      "dateOfBirth": this.registerForm.value.date,
      "phone_Number":this.registerForm.value.phone
    }
  
    this._auth.registerUser(dataUser).subscribe(resp => {
      console.log('resp from RegisterUserData>>>', resp.token);
      this.isLoading = false;
      this.message = "Utilisateur enregistré avec succès"
      
       this._router.navigate(['users/login']);
     

   }, err => {
       
       this.isLoading = false ;
       this.error = err.error.message;
       console.log("this error>>>", err)
   })
   
  }



  confirmEmail(){
    
  }
  










}
