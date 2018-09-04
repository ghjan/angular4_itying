import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  msg: string;

  // 接受父组件传过来的run方法
  @Input() run;
  @Input() getDataFromChild;

  private msgInfo = '这是子组件的数据';

  constructor() {
  }

  ngOnInit() {
  }

  sendParent() {  // 子组件里面调用父组件的方法
    this.getDataFromChild(this.msgInfo);
  }

}
