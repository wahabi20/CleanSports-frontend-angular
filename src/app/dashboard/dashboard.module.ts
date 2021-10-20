import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { UsersListComponent } from './accueil/users-list/users-list.component';
import { UserItemComponent } from './accueil/user-item/user-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationModule } from '../authentification/authentification.module';
import { ChartsComponent } from './charts/charts.component';
import { DashComponent } from './dash/dash.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';




@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ManageUsersComponent,
    AccueilComponent,
    UsersListComponent,
    UserItemComponent,
    ChartsComponent,
    DashComponent,
    UpdateUserComponent,
    AddUserComponent
   
  ],
  
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthentificationModule
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  providers:[
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,useValue: {}} ,
    {provide: MAT_RADIO_DEFAULT_OPTIONS, useValue: { color: 'primary' },} 
  ]
})
export class DashboardModule { }
