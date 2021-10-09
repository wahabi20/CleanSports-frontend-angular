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




@NgModule({
  declarations: [
  
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ManageUsersComponent,
    AccueilComponent,
    
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ]
})
export class DashboardModule { }
