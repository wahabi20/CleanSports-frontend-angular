import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
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
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any ,
   
  ) { }
  
  
 
  ngOnInit(): void {
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
