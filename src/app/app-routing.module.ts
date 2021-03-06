import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmComponent } from './authentification/emailconfirm/email-confirm/email-confirm.component';
import { LoginComponent } from './authentification/login/login.component';
import { RegisterComponent } from './authentification/register/register.component';
import { ResetPasswordComponent } from './authentification/resetpassword/reset-password/reset-password.component';
import { AccueilComponent } from './dashboard/accueil/accueil.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { ManageUsersComponent } from './dashboard/manage-users/manage-users.component';
import { AddTeamComponent } from './god/add-team/add-team.component';

import { HomeComponent } from './god/home/home/home.component';
import { MarketComponent } from './god/market/market.component';
import { PlayerComponent } from './god/player/player/player.component';
import { StarComponent } from './god/star/star.component';
import { TeamComponent } from './god/team/team.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { DashLayoutComponent } from './layouts/dash-layout/dash-layout.component';
import { GodLayoutComponent } from './layouts/god-layout/god-layout.component';
import { ProfileLayoutComponent } from './layouts/profile-layout/profile-layout.component';
import { UserProfileComponent } from './profile/user-profile/user-profile.component';

const routes: Routes = [


 // Auth Routes
 {
  path:'',
  component: AuthLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/auth',
      pathMatch: 'full'

    },
    { path: 'register', component: RegisterComponent},
    { path: 'emailconfirm', component: EmailConfirmComponent},
    { path: 'reset', component: ResetPasswordComponent},
    {
      path: 'auth',
      loadChildren: () => import('./authentification/authentification.module').then(m => m.AuthentificationModule)
    }
  ]
},

// God Routes
{
  path:'',
  component:GodLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'

    },
    { path: 'players', component: PlayerComponent},
    { path: 'teams', component: TeamComponent},
    { path: 'stars', component: StarComponent},
    { path: 'marketplace', component: MarketComponent},
    { path: 'addteam', component: AddTeamComponent},
   
    {
      path: 'home',
      loadChildren: () => import('./god/god.module').then(m => m.GodModule)
    }
  ]
},


// Dashboard Routes
{
  path:'',
  component:DashLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/Dashboard',
      pathMatch: 'full'

    },
    { path: 'Dashboard', component: AccueilComponent},
    { path: 'users', component: ManageUsersComponent},
    { path: 'add-user', component: AddUserComponent},

   
  
  
    {
      path: 'Dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }
  ]
},


// User profile
{
  path:'',
  component:ProfileLayoutComponent,
  children: [
    {
      path: '',
      redirectTo: '/Profile',
      pathMatch: 'full'

    },
    { path: 'Profile', component: UserProfileComponent },
    
   
  
  
    {
      path: 'Profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
    }
  ]
},












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
