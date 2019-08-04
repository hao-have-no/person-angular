import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroMeasurementComponent } from './hero-measurement/hero-measurement.component';
import { HeroMeasurementChildrenComponent } from './hero-measurement-children/hero-measurement-children.component';
import { HighlightDirective } from './highlight.directive';

import {AdBannerComponent} from "./ad-component/ad-banner.component";
import {HeroProfileComponent} from "./ad-component/hero-profille.component";
import {HeroJobAdComponent} from "./ad-component/hero-job-ad.component";
import {AdListComponent} from "./ad-component/ad.list.component";
import {AdDirective} from "./ad-component/ad.directive";
import { AppUnlessDirective } from './ad-component/app-unless.directive';
import { ExponentialPipe } from './ad-component/exponential.pipe';

/**
 * 响应式表单
 */
import { ReactiveFormsModule } from "@angular/forms";
import {HeroReactiveControllerComponent} from "./name-editor/hero-reactive-controller.component";
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './angular-form/hero-form/hero-form.component';
import { HeroFormControllerComponent } from "./angular-form/hero-form-controller.component";
import { HeroFormReactiveComponent } from './angular-form/hero-form-reactive/hero-form-reactive.component';

/**
 * 动画元素
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {PageService} from "./page.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroMeasurementComponent,
    HeroMeasurementChildrenComponent,
    HighlightDirective,
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdListComponent,
    AdDirective,
    AppUnlessDirective,
    ExponentialPipe,
    NameEditorComponent,
    HeroReactiveControllerComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    HeroFormControllerComponent,
    HeroFormReactiveComponent
  ],
  entryComponents:[ HeroProfileComponent, HeroJobAdComponent],
  imports: [
    BrowserModule,
      // 获取浏览器特有服务
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    // InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [PageService],//服务提供商
  bootstrap: [AppComponent]//根组件，提供视图服务
})
export class AppModule { }
