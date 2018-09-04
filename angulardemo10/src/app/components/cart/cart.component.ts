import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private msg = '子组件的数据';
  private name = 'cart';

  constructor() {
  }

  ngOnInit() {
  }

  run() {
    alert('这是购物车组件的run方法');
  }

}
