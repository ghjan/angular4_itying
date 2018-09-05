import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo_name = '';
  private list: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  addData(e) {
    // alert(this.todo_name);  // 双向数据绑定， 可以拿到input框里面的值
    if (e.keyCode === 13) {
      const obj = {
        name: this.todo_name,
        status: 1
      };
      this.list.push(obj);
      this.todo_name = '';
    }
  }

  deleteData(key) {
    // 删除数组中的数据
    this.list.splice(key, 1);
  }


  changeStatus(key) {
    // 切换状态 1 <-> 2
    if (this.list[key].status === 2) {
      this.list[key].status = 1;
    } else {
      this.list[key].status = 2;
    }
  }

}

// export class TodoItem {
//   constructor(
//     public name: string,
//     public status: Number,
//   ) {
//
//   }
// }
