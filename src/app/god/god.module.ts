import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player/player.component';
import { TeamComponent } from './team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GodRoutingModule } from './god-routing.module';
import { StarComponent } from './star/star.component';
import { MarketComponent } from './market/market.component';
import { SpinnerComponent } from '../authentification/components/spinner/spinner.component';
import { AuthentificationModule } from '../authentification/authentification.module';
import { AddTeamComponent } from './add-team/add-team.component';



@NgModule({
  declarations: [
    HomeComponent,
    PlayerComponent,
    TeamComponent,
    StarComponent,
    MarketComponent,
    AddTeamComponent
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    GodRoutingModule,
    AuthentificationModule
  ],
  exports: [
    
  ]

})
export class GodModule { }
