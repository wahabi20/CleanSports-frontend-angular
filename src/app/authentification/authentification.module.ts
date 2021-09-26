import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { RouterModule } from '@angular/router';
import { EmailConfirmComponent } from './emailconfirm/email-confirm/email-confirm.component';
import { ResetPasswordComponent } from './resetpassword/reset-password/reset-password.component';
import { AuthentificationRoutingModule } from './authentification-routing.module';







@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    SpinnerComponent,
    EmailConfirmComponent,
    ResetPasswordComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    AuthentificationRoutingModule
  ],
 
  
})
export class AuthentificationModule { }
