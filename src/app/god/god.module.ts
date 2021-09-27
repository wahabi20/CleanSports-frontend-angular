import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerComponent } from './player/player/player.component';
import { TeamComponent } from './team/team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GodRoutingModule } from './god-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    PlayerComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    GodRoutingModule
  ]
})
export class GodModule { }
