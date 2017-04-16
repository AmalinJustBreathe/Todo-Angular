import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from '../list-reducer';
import * as listActions from '../list-actions';
import { Item } from '../item.interface';

@Component({
  selector: 'ac-list-toggle',
  template: `
    <input class="toggle-all"
        (click)="toggleAll($event.target)"
        type="checkbox">
  `,
  styleUrls: ['ac-list-toggle.component.css']
})
export class AcListToggleComponent {

  constructor(private store: Store<State>) {
  }

  toggleAll(markAll) {
    this.store.dispatch(new listActions.ToggleAllCompletedAction(markAll.checked));
  }

}
