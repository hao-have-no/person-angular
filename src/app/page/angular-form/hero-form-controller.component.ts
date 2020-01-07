import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-hero-form-controller',
    template: `<app-hero-form></app-hero-form>
    <app-hero-form-reactive></app-hero-form-reactive>`,
})

export class HeroFormControllerComponent implements OnInit{

    constructor(){}

    ngOnInit(): void {

    }
}
