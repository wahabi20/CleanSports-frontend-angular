import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}




@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

 
  last_Name = '';
  first_Name = '';
  address = '';
  isAdmin = 0;
  email = '';
  date ='';
  password = '';
  passwordConfirme = '';
  phone = 0;
  pts = 0;

  constructor(
    public dialogRef: MatDialogRef<UpdateUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ,
  ) { }

  ngOnInit(): void {
    // console.log("data from isAdmin >>>",this.)
    this.last_Name = this.data['last_Name'];
    this.first_Name= this.data['first_Name'];
    this.address = this.data['address'];
    this.email = this.data['email'];
    this.date = this.data['dateOfBirth'];
    this.password = this.data['password'];
    this.passwordConfirme = this.data['password_Confirme'];
    this.phone = this.data['phone'];
    this.pts = this.data['pts'];
    
     console.log('isAdmin value>>>',this.data['isAdmin'] );
    
     if(this.data['isAdmin'] === true){
         this.isAdmin = 1;
      }
      else if(this.data['isAdmin'] === undefined){
        this.isAdmin = 0;
      }
      else{
         this.isAdmin = 2;
     }
  
  }





  
  emailFormControl = new FormControl('', [
    Validators.required, Validators.email
   ]);

   firstNameFormControl = new FormControl('', [
     Validators.required, Validators.minLength(3)

   ]);

    lastNameFormControl = new FormControl('', [
     Validators.required, Validators.minLength(6)

   ]);
   AdressFormControl = new FormControl('', [
    Validators.required, Validators.minLength(5)

  ]);

   PasswordFormControl = new FormControl('', [
     Validators.required, Validators.minLength(6)

   ]);

   PasswordConfirmeFormControl = new FormControl('', [
     Validators.required, Validators.minLength(6)

   ]);

   DateFormControl = new FormControl('',
   [
    Validators.required, Validators.minLength(6)

  ])

  PhoneFormControl = new FormControl('',
  [
   Validators.required, Validators.minLength(8)

 ])

 NbPointsFormControl = new FormControl('',
 [
  Validators.required, 

 ])
  

   matcher = new MyErrorStateMatcher();

}
