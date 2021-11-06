
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';



const routes: Routes = [
   {
     path:'',
     component: UserProfileComponent,
     children: [
       {
         path: 'Profile',
         component: UserProfileComponent

       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
