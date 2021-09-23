import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmComponent } from './authentification/emailconfirm/email-confirm/email-confirm.component';
import { HomeComponent } from './authentification/home/home.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { ResetPasswordComponent } from './authentification/resetpassword/reset-password/reset-password.component';

const routes: Routes = [
     {path: 'users',
            children:[
                { path: '', redirectTo:'login', pathMatch: 'full'},
                { path: 'login', component:LoginComponent},
                { path: 'register', component: RegisterComponent},
                { path: 'home', component: HomeComponent},
                { path: 'emailconfirm', component: EmailConfirmComponent},
                { path: 'reset', component: ResetPasswordComponent},
               
      ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
