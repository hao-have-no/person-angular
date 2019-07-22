import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroMeasurementComponent } from "./hero-measurement/hero-measurement.component";

const routes: Routes = [
    {path: '', redirectTo:'/test', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path:'heros', component: HeroesComponent},
    {path:'test',component:HeroMeasurementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
