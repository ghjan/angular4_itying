import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header', /*表示使用这个组件的名称*/
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '这是一个头部组件';
  // 通过Input装饰器接受父组件传值
  @Input() msg: string;

  // EventEmitter实现子组件给父组件传值
  @Output() toparent = new EventEmitter();

  constructor() {


  }

  /*构造函数*/

  ngOnInit() {  /*生命周期函数  加载触发的方法*/

    // this.msg = '这是一个angular的数据';
  }

  requestData() {
    // 调用父组件的方法请求数据
    this.toparent.emit('这是子组件的值'); // 发送消息
  }

}
