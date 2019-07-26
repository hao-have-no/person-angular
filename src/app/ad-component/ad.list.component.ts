import { Component, OnInit } from "@angular/core";
import { AdItem } from "./ad-item";
import { AdService } from "./ad.service";
import { AppUnlessDirective } from "./app-unless.directive";

@Component({
    selector:'app-ad-list',
    template: `
    <div>
        <h1>ad-detail</h1>
        <!--<p *ngFor="let hero of textData;let i = index; let odd=odd;" [class.odd]="odd">-->
            <!--({{i}}) {{hero.name}}-{{odd}}-->
        <!--</p>-->

        <h2 id="appUnless">UnlessDirective</h2>
        <p>
            The condition is currently
            <span>{{condition}}</span>.
            <button
                    (click)="condition = !condition" >
                Toggle condition to {{condition ? 'false' : 'true'}}
            </button>
        </p>
        <p *appUnless="condition" class="unless a">
            (A) This paragraph is displayed because the condition is false.
        </p>

        <p *appUnless="!condition" class="unless b">
            (B) Although the condition is true,
            this paragraph is displayed because appUnless is set to false.
        </p>

        <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
        <button (click)="toggleFormat()">Toggle Format</button>
        
        
        
        <h2>管道</h2>
        <h2>Power Boost Calculator</h2>
        <div>Normal power: <input [(ngModel)]="power"></div>
        <div>Boost factor: <input [(ngModel)]="factor"></div>
        <p> super power:{{power| exponential:factor}}</p>
      <!--<app-ad-banner [ads]="ads"></app-ad-banner>-->
        
        <!--属性型指令-->
        <!--<div>-->
            <!--<input type="radio" name="colors" (click)="color='lightgreen'">Green-->
            <!--<input type="radio" name="colors" (click)="color='yellow'">Yellow-->
            <!--<input type="radio" name="colors" (click)="color='cyan'">Cyan-->
        <!--</div>-->
        <!--<p [appHighlight]="color">Highlight me!</p>-->
    </div>
  `
})

export class AdListComponent implements OnInit{
    ads: AdItem[];
    color: string;
    textData=[{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"}];
    birthday = new Date(1988,3,15);
    toggle = true;
    power = 5;
    factor = 1;

    constructor(private adService:AdService){ }

    ngOnInit(): void {
        this.ads=this.adService.getAds();
    }

    get format() {
        return this.toggle? 'longDate' : 'fullDate';
    }

    toggleFormat(){
        this.toggle = !this.toggle;
    }


}
