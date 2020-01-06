/*
 * @Author: fenghao
 * @Date: 20-1-6 上午8:59
 * @LastEditors: fenghao
 * @LastEditTime: 20-1-6 上午8:59
 * @Description: 
 */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginComponent } from './auth-login.component';

describe('LoginComponent', () => {
    let component: AuthLoginComponent;
    let fixture: ComponentFixture<AuthLoginComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ AuthLoginComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AuthLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
