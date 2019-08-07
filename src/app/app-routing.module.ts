import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from "./heroes/heroes.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroMeasurementComponent } from "./hero-measurement/hero-measurement.component";
import {AdListComponent} from "./ad-component/ad.list.component";
import { HeroReactiveControllerComponent } from "./name-editor/hero-reactive-controller.component";
import {HeroFormControllerComponent} from "./angular-form/hero-form-controller.component";
import {PageViewComponent} from "./page-view/page-view.component";

const routes: Routes = [
    // {path: '', redirectTo:'/reactive', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path:'heros', component: HeroesComponent},
    {path:'test', component:HeroMeasurementComponent},
    {path:'ad',component:AdListComponent},
    {path:'reactive',component:HeroReactiveControllerComponent},
    {path:'hero',component:HeroFormControllerComponent},
    {path:'echart',component:PageViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
