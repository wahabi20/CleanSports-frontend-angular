import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GodLayoutComponent } from '../layouts/god-layout/god-layout.component';
import { HomeComponent } from './home/home/home.component';


const routes: Routes = [
   {
     path:'',
     component: HomeComponent,
     children: [
       {
         path: 'home',
         component: HomeComponent

       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GodRoutingModule { }
