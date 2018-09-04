import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shoplist',
  templateUrl: './shoplist.component.html',
  styleUrls: ['./shoplist.component.css']
})
export class ShoplistComponent implements OnInit {
  private id: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 获取动态路由
    // this.route.params
    // 获取动态传值
    console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data) => {
      console.log(data);
    });
  }

}
