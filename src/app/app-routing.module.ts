import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: ()=> import('./pages/home/home.module').then((m)=> m.HomeModule),
    //loadChildren: ()=> import('./home/home.module').then((m)=> m.HomeModule),
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./pages/dashboard/dashboard.module').then((m)=> m.DashboardModule),
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
