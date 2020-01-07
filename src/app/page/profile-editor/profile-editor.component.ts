import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

/**
 * 当需要与多个表单打交道时，手动创建多个表单控件实例会非常繁琐。FormBuilder 服务提供了一些便捷方法来生成表单控件。
 */
import {FormBuilder} from "@angular/forms";

//增加校验
import { Validators } from "@angular/forms";


@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
export class ProfileEditorComponent implements OnInit {
  //FormGroup存放所有的表单控件
  // profileForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   address:new FormGroup({
  //     street: new FormControl(''),
  //     city: new FormControl(''),
  //     state:new FormControl(''),
  //     zip:new FormControl('')
  //   })
  // });

 //profileForm 这个 FormGroup 也通过 FormGroup 指令绑定到了 form 元素，在该模型和表单中的输入框之间创建了一个通讯层。
  // 由 FormControlName 指令提供的 formControlName 属性把每个输入框和 FormGroup 中定义的表单控件绑定起来。


  /**
   * formBuild
   * @param fb
   */
  profileForm=this.fb.group({
    firstName:['',Validators.required],
    lastName:[''],
      address:this.fb.group({
        street: [''],
        city:[''],
        state:[''],
        zip:[''],
      })
  })

  constructor(
      private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  updateProfile(){
    this.profileForm.patchValue({
      firstName:'Nancy',
      address:{
        street:'123 Drew'
      }
    })
  }

  onSubmit(){
    console.warn(this.profileForm.value);
  }

}
