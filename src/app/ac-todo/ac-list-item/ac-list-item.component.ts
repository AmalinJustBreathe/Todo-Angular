import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import { Item } from '../item.interface';
import { State } from '../list-reducer';
import * as listActions from '../list-actions';

@Component({
  selector: 'ac-list-item',
  templateUrl: 'ac-list-item.component.html',
  styleUrls: ['ac-list-item.component.css']
})
export class AcListItemComponent {

  @Input() item: Item;
  private editMode: boolean;

  constructor(private store: Store<State>) {
  }

  private updateItem(newVal: string): void {
    this.editMode = false;
    this.store.dispatch(new listActions.UpdateItemAction({ item: this.item, newTitle: newVal }));
  }

  private itemCompleted() {
    this.store.dispatch(new listActions.ToggleCompletedAction(this.item));
  }

  private removeItem() {
    this.store.dispatch(new listActions.RemoveItemAction(this.item));
  }

}
