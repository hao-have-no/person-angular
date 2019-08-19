import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public openTip=true;
  private focusTip=false;

  constructor() { }

  ngOnInit() {
    //监控页面变化
    // setInterval(()=>{
    //   const pageWidth=document.body.clientWidth;
    //   pageWidth == 1200?false:true;
    // },1000)
  }

  //修改菜单状态
  updateNaviTip(){
    this.openTip=!this.openTip;
  }

  onFocus(){
    this.focusTip=true;
    document.getElementById('search-input').focus();
  }

  loseFocus(){
    this.focusTip=false;
  }

}
