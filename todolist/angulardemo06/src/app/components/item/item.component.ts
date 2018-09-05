import {Component, Input, OnInit} from '@angular/core';

import {TodoItem} from '../../shared/models/todo';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: TodoItem;

  constructor() {
  }

  ngOnInit() {
  }

  get hasUrl(): boolean {
    return this.item.url.indexOf('http') === 0;
  }

}
