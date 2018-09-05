import {Component, OnInit} from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {TodoItem} from '../../shared/models/todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  todo_name = '';
  public list = [];

  constructor(private storage: StorageService) {
    console.log(this.storage);

  }

  ngOnInit(): void {

    // 每次刷新获取storage里面 todolist的值
    const todolist = this.storage.getItem('todolist');
    if (todolist) {

      this.list = todolist;
    }
  }

  addData(e) {
    // alert(this.todo_name);  // 双向数据绑定， 可以拿到input框里面的值
    if (e.keyCode === 13) {
      /*每次增加的一个对象数据*/
      const todo_item: TodoItem = new TodoItem(this.todo_name, 1, '', '');

      const todolist = this.storage.getItem('todolist');

      if (todolist) {
        todolist.push(todo_item);
        // 如果有数据，拿到这个数据，然后把新数据和这个storage数据拼接，重新写入
        this.storage.setItem('todolist', todolist);

      } else {
        // 3.如果没有数据  直接给storage写入数据
        const arr = [];
        arr.push(todo_item);
        this.storage.setItem('todolist', arr);
      }

      this.list.push(todo_item);
      this.todo_name = '';
    }
  }

  deleteData(key) {
    // 删除数组中的数据
    this.list.splice(key, 1);
    this.storage.setItem('todolist', this.list);
  }


  changeStatus(key, status) {
    this.list[key].status = status;
    this.storage.setItem('todolist', this.list);
  }

}

