import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
  private id: any;

  // 动态路由的依赖注入
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 获取动态路由的值
    console.log(this.route.params);
    this.route.params.subscribe(data => {
      this.id = data.aid;
      console.log(this.id);
    });
  }

}
