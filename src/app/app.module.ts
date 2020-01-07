import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgxEchartsModule } from "ngx-echarts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagesComponent } from './page/messages/messages.component';
import { HighlightDirective } from './directive/highlight.directive';

/**
 * 响应式表单
 */
import { ReactiveFormsModule } from "@angular/forms";
import {HeroReactiveControllerComponent} from "./page/name-editor/hero-reactive-controller.component";
import { NameEditorComponent } from './page/name-editor/name-editor.component';
import { ProfileEditorComponent } from './page/profile-editor/profile-editor.component';
import { HeroFormComponent } from './page/angular-form/hero-form/hero-form.component';
import { HeroFormControllerComponent } from "./page/angular-form/hero-form-controller.component";
import { HeroFormReactiveComponent } from './page/angular-form/hero-form-reactive/hero-form-reactive.component';

/**
 * 动画元素
 */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {PageService} from "./services/page.service";
import { PageViewComponent } from './page/page-view/page-view.component';
import { NavigationComponent } from './page/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    HighlightDirective,
    NameEditorComponent,
    HeroReactiveControllerComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    HeroFormControllerComponent,
    HeroFormReactiveComponent,
    PageViewComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
      // 获取浏览器特有服务
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxEchartsModule
  ],
  providers: [PageService],//服务提供商
  bootstrap: [AppComponent]//根组件，提供视图服务
})
export class AppModule { }
