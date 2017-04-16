import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Item } from "./item.interface";

export const ADD_ITEM             = 'ADD_ITEM';
export const UPDATE_ITEM          = 'UPDATE_ITEM';
export const REMOVE_ITEM          = 'REMOVE_ITEM';
export const CLEAR_COMPLETED      = 'CLEAR_COMPLETED';
export const TOGGLE_COMPLETED     = 'TOGGLE_COMPLETED';
export const TOGGLE_ALL_COMPLETED = 'TOGGLE_ALL_COMPLETED';

@Injectable()
export class AddItemAction implements Action {
  readonly type = ADD_ITEM;
  constructor(public payload: Item) { }
}

@Injectable()
export class UpdateItemAction implements Action {
  readonly type = UPDATE_ITEM;
  constructor(public payload: { item: Item, newTitle: string }) { }
}

@Injectable()
export class RemoveItemAction implements Action {
  readonly type = REMOVE_ITEM;
  constructor(public payload: Item) { }
}

@Injectable()
export class ClearCompletedAction implements Action {
  readonly type = CLEAR_COMPLETED;
}

@Injectable()
export class ToggleCompletedAction implements Action {
  readonly type = TOGGLE_COMPLETED;
  constructor(public payload: Item) { }
}

@Injectable()
export class ToggleAllCompletedAction implements Action {
  readonly type = TOGGLE_ALL_COMPLETED;
  constructor(public payload: boolean) { }
}

