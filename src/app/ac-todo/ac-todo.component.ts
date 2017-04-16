import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import { Store } from '@ngrx/store';

import { State } from './list-reducer';
import * as listActions from './list-actions';
import { Item } from './item.interface';


@Component({
  selector: 'ac-todo',
  templateUrl: 'ac-todo.component.html',
  styleUrls: ['ac-todo.component.css']
})
export class TodoComponent implements OnInit {
  items$: Observable<Item[]>;
  completedItemsCount: number;

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.items$ = this.store.select("items");
    this.items$.subscribe(res => {      
      this.completedItemsCount = res.filter(item => item.completed).length;      
    })
  }

  addItem(title: string): void {
    var itemToAdd = {
      title: title,
      completed: false
    };
    this.store.dispatch(new listActions.AddItemAction(itemToAdd));
  }

}



