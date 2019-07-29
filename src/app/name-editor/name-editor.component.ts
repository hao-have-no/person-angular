import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {
  //构造函数设置初始值,后续可以在组件类中创建控件，对表单状态进行监听、修改、校验
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  updateName(){
    this.name.setValue('Nancy');
  }

}
