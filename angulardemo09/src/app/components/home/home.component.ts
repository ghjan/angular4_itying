import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private msg = '我是home组件的msg';

  constructor() {
  }

  ngOnInit() {
  }

  run() {
    alert('这是home组件的run方法');
  }

  getDataFromChild(childData) {
    alert(childData);
  }
}
