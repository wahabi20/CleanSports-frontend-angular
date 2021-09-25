import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  hide: boolean = true;
  isLoading = false;
  error: string = "";
  message: string = "";
 
  public form = {
    resetToken : null
  }

  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router,
              private routerActivated: ActivatedRoute,) 
              { 
                 routerActivated.queryParams.subscribe(params => {
                    this.form.resetToken = params['token'];
                 })
              }

  ngOnInit(): void {

    console.log("resetToken>>>", this.form.resetToken)
  }


  ResetPasswordForm: FormGroup = this.fb.group({
    passwordConfirm: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onResetPassword()
  {

    if (!this.ResetPasswordForm.valid) {
      return;
    }

     this.isLoading = true;


    console.log("login form >>>",this.ResetPasswordForm.value);
    const data = {
      "resteTokenparams" : this.form.resetToken,
      "dataForm" : this.ResetPasswordForm.value
   }
   
   this._auth.resetPassword(data).subscribe(resp => {
       console.log("resp rsete >>>", resp);
       this.isLoading = false;
        this.message = resp.message;
        alert("mot de passe changé avec succès");
        this._router.navigate(['users/login']);

   }, err => {
    console.log(err)
    this.isLoading = false ;
    this.error = err.error.message;
    console.log("this error>>>", err)
  })
     
  }
}
