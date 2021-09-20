import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';

const routes: Routes = [
     {path: '',
            children:[
                { path: '', redirectTo:'login', pathMatch: 'full'},
                { path: 'login', component:LoginComponent},
                { path: 'register', component: RegisterComponent},
               
      ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
