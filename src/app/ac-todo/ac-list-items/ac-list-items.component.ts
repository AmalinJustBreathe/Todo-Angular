import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as listActions from '../list-actions';
import { State }  from '../list-reducer';
import { Item } from '../item.interface';



@Component({
  selector: 'ac-list-items',
  template: `
    <ul class="todo-list">
      <ac-list-item *ngFor="let item of items;" [item]="item"></ac-list-item>
    </ul>
  `,
  styles: [`
    .todo-list {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  `]
})
export class AcListItemsComponent {
  
  @Input() items: Item[];

}
