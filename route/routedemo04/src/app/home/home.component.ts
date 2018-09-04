import {Component, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goNews() {
    // alert('goNews');
    // js跳转路由
    // this.router.navigate(['/news']);
    this.router.navigate(['/newscontent', '123']);
  }

  goshop(aid, id) {
    // 调整路由get传值
    const navigationExtras: NavigationExtras = {
      queryParams: {'aid': aid, 'id': id},
      fragment: 'anchor'  // 锚点，其他可以参考官方文档
    };
    this.router.navigate(['/shoplist'], navigationExtras);
  }
}
