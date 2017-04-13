import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ac-list-input',
  template: `
   <input class="new-todo"
       (keydown.enter) = "itemAdded.emit($event.target.value); $event.target.value = '';"
       placeholder     = {{placeholder}}
       autofocus>
  `,
  styleUrls: ['ac-list-input.css']
})
export class AcListInputComponent {

  @Input() placeholder : string;
  @Output() itemAdded  : EventEmitter<string> = new EventEmitter<string>();

}
