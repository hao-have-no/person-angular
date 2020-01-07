import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroFormControllerComponent} from "./page/angular-form/hero-form-controller.component";
import {PageViewComponent} from "./page/page-view/page-view.component";

const routes: Routes = [
    {path:'hero',component:HeroFormControllerComponent},
    {path:'echart',component:PageViewComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
