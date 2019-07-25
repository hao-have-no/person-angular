import { Component, OnInit } from "@angular/core";
import { AdItem } from "./ad-item";
import { AdService } from "./ad.service";

@Component({
    selector:'app-ad-list',
    template: `
    <div>
        <h1>ad-detail</h1>
        <p *ngFor="let hero of textData;let i = index; let odd=odd;" [class.odd]="odd">
            ({{i}}) {{hero.name}}-{{odd}}
        </p>
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

    constructor(private adService:AdService){ }

    ngOnInit(): void {
        this.ads=this.adService.getAds();
    }
}
