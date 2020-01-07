import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'app-ad-list',
    template: `<app-name-editor></app-name-editor>
    <app-profile-editor></app-profile-editor>`,
})

export class HeroReactiveControllerComponent implements OnInit{

    constructor(){}

    ngOnInit(): void {

    }
}
