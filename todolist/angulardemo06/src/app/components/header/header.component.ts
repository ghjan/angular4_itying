import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',  /*表示使用这个组件的名称*/
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title='这是一个头部组件';

  msg:any;

  constructor() {


  }   /*构造函数*/

  ngOnInit() {  /*生命周期函数  加载触发的方法*/

    this.msg='这是一个angular的数据';
  }

}
