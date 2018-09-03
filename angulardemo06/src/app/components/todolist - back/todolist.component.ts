import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo = '';
  private list = [];

  constructor() {
  }

  ngOnInit() {
  }

  addData(e) {
    // alert(this.todo_name);  // 双向数据绑定， 可以拿到input框里面的值
    if (e.keyCode === 13) {
      this.list.push(this.todo);
      this.todo = '';
    }
  }

  deleteData(key) {
    // 删除数组中的数据
    this.list.splice(key, 1);
  }

}
