import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Md5Service , HttpClientService , AuthOperaService , UrlOperatorService } from 'http-client';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'lib-auth-login',
  templateUrl:'./auth-login.component.html',
  styleUrls:['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit {
  public validateForm: FormGroup;
  private environment: any;
  constructor(
      private fb: FormBuilder,
      private md5: Md5Service,
      private http: HttpClientService,
      private message: NzMessageService,
      private authOpera: AuthOperaService,
      private urlOpera: UrlOperatorService,
      private router: Router,
      @Inject('environment')
          environment
  ) {
    this.environment = environment;
  }

  ngOnInit(): void {
    this.authOpera.delete();
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let ep = this.md5.encryption(this.validateForm.value.password);
    let eu = this.md5.encryption(this.validateForm.value.username);
    this.http.login(eu, ep).subscribe(res => {
      if(res.status == 'AUTH_FAIL') {
        this.message.error('用户名或密码错误，请重试')
      } else {
        this.authOpera.save(res.userInfo)
        let referrer = this.urlOpera.getRefferrer();
        const { homePageUrl } = this.environment;
        this.router.navigate([referrer || homePageUrl || '/']);
      }
    })
  }

}
