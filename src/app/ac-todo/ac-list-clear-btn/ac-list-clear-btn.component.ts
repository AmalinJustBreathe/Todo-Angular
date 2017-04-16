import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { State } from '../list-reducer';
import * as listActions from '../list-actions';

@Component({
  selector: 'ac-list-clear-btn',
  template: `
   <button  
    (click) = "clearCompleted()"
     class  = "clear-completed">Clear completed {{completedCount}}</button>
  `,
  styleUrls: ['ac-list-clear-btn.component.css']
})
export class AcListClearBtnComponent {

  @Input() completedCount: number;

  constructor(private store: Store<State>) { }

  clearCompleted() {
    this.store.dispatch(new listActions.ClearCompletedAction());
  }
}
