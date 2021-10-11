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




@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ManageUsersComponent,
    AccueilComponent,
    UsersListComponent,
    UserItemComponent,
    
   
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
  ]
})
export class DashboardModule { }
