import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';







const routes: Routes = [
   {
     path:'',
     component: AccueilComponent ,
     children: [
       {
         path: 'Dashboard',
         component: AccueilComponent

       }
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
