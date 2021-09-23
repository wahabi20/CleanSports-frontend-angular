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
  hide: boolean = false;

  constructor(private fb: FormBuilder,
              private _auth: AuthService,
              private _router: Router) { }

  ngOnInit(): void {
  }



  EmailconfirmForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
   
  
  })


  onSentEmail(){
    console.log("login form >>>",this.EmailconfirmForm.value);
    
  
 }

}
