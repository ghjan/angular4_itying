import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private msg = '这是一个home组件';
  private username: any;
  private flag = false;

  private search: any;

  constructor() {
    this.username = '张三';
    this.flag = true;
    this.search = '搜索的内容';
  }

  ngOnInit() {
  }

  getMsg() {
    /* 自定义方法*/
    alert(this.msg);
  }

  setName(username: string) {
    this.username = username;
  }

  toggleFlag() {
    this.flag = !this.flag;
  }

  keyupFn(e) {
    console.log(e);
    if (e.keyCode === 13) {
      console.log('按回车了');
    }
  }

  run(e) {
    console.log(e);
  }

  getSearch() {
    alert(this.search);
  }
}
