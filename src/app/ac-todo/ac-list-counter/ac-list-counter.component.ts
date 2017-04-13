import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-list-counter',
  template: `
    <span class="todo-count">
        <strong>{{ count }}</strong>
        items left
    </span>
  `,
  styleUrls: ['ac-list-counter.component.css']
})
export class AcListCounterComponent {

   @Input() count: number;

}
