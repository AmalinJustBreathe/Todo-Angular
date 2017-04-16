import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { Item } from './item.interface';
import * as list from './list-actions';

export interface State {
    items: Item[];
};

export const initialState: State = {
    items: []
};

export function reducer(state = initialState, action: Action): State {

    switch (action.type) {
        case list.ADD_ITEM: {
            return { items: [...state.items, action.payload] };
        }

        case list.UPDATE_ITEM: {            
            const index = state.items.indexOf(action.payload.item);
            state.items[index].title = action.payload.newTitle;            
            return { items: [...state.items] };
        }

        case list.REMOVE_ITEM: {
            const index = state.items.indexOf(action.payload);
            return { items: state.items.slice(0, index).concat(state.items.slice(index + 1)) };
        }

        case list.CLEAR_COMPLETED: {
             state.items = state.items.filter(item => !item.completed);
            return { items: [...state.items] };
        }

        case list.TOGGLE_COMPLETED: {
            const index = state.items.indexOf(action.payload);
            state.items[index].completed = !state.items[index].completed;
            return { items: [...state.items] };
        }

        case list.TOGGLE_ALL_COMPLETED: {
            state.items.forEach(item => item.completed = action.payload);
            return { items: [...state.items] };
        }

        default: {
            return state;
        }
    }
}

