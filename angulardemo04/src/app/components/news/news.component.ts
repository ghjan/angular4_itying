import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private id = 123555;
  h = '';
  title = '你好angular4.x(news)';
  msg: any;
  protected msg1 = '这是一个string类型的msg';
  private username = '张三';
  // 对象
  obj = {
    name: '张三'
  };
  // 数组
  list = [];
  list2: any[];
  list3: any[];
  list4: any[];

  constructor() {
    this.msg = '这是msg, 另一种定义属性的方法';
    // 去服务器请求数据 新闻
    this.h = '<h2>这是新闻数据</h2>';
    this.list = ['111', '222', '333'];
    this.list2 = ['数学', '英语', '中文'];
    this.list3 = [
      {
        title: '数学'
      },
      {title: '英语'}
      ,
      {title: '中文'}];
    this.list4 = [
      {
        catename: '宝马',
        list: [
          {title: 'x1'},
          {title: 'm3'},
          {title: 'm5'},
          {title: 'x3'},
          {title: 'x5'}]
      },
      {
        catename: 'audi',
        list: [
          {title: 'a4'},
          {title: 'a6'},
          {title: 'a8'},
          {title: 'q1'},
          {title: 'q3'}]
      }
    ];
  }

  ngOnInit() {
  }

}
