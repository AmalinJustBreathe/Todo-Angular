import { Component, Output, EventEmitter } from '@angular/core';
import { ListService } from "../list.service";

@Component({
  selector: 'ac-list-clear-btn',
  template: `
   <button
    [hidden] = "list.countCompleted() == 0"  
    (click)  = "clearCompleted.emit()"
    class    = "clear-completed">Clear completed</button>
  `,
  styleUrls: ['ac-list-clear-btn.component.css']
})
export class AcListClearBtnComponent {

  @Output() clearCompleted = new EventEmitter<any>();

  constructor(private list: ListService) {
  }

}
