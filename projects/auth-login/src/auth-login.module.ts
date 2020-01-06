import { NgModule } from '@angular/core';
import { AuthLoginComponent } from './lib/auth-login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgZorroAntdModule } from "ng-zorro-antd";

@NgModule({
  declarations: [AuthLoginComponent],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      NgZorroAntdModule
  ],
  exports: [AuthLoginComponent]
})
export class AuthLoginModule { }
