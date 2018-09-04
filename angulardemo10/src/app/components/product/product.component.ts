import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @ViewChild('cart') mycart; // 括号里面的cart是在html给cart子组件起的引用名称

  constructor() {
  }

  ngOnInit() {
  }

  getChildData() {
    this.mycart.run();  // 执行子组件里面的方法
    console.log(this.mycart.msg);
    this.mycart.name = '父组件修改过的cart name';
  }
}
