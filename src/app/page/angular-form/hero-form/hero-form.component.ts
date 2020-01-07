import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  model=new Hero(18,'DR IQ',this.powers[0],'chunck Overstreet');//实例化一个对象

  submitted=false;

  onSubmit(){
    this.submitted = true;
  }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  //测试函数
  get diagnostic(){
    return JSON.stringify(this.model);
  }

  constructor() { }

  ngOnInit() {

  }


}
