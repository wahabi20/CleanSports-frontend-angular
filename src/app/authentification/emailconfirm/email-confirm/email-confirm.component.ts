import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.scss']
})
export class EmailConfirmComponent implements OnInit {


  isLoading = false;
  message: string = "";
  error: string = "";



  
  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }



  EmailconfirmForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
   
  
  })


  onSentEmail(){
    
    if (!this.EmailconfirmForm.valid) {
      return;
    }

     this.isLoading = true;
   
    console.log("login form >>>",this.EmailconfirmForm.value);
    this._auth.forgetPassowrd(this.EmailconfirmForm.value).subscribe( resp => {
        console.log(resp)
        this.isLoading = false;
        this.message = resp.message;
    }, err => {
      console.log(err)
      this.isLoading = false ;
      this.error = err.error.message;
      console.log("this error>>>", err)
    })
  
 }

}
