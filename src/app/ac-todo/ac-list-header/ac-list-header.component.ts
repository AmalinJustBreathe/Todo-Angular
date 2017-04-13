import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-list-header',
  template: `
   <header class="header">
    <ng-content></ng-content>
   </header>
  `,
  styles: []
})
export class AcListHeaderComponent  {
}
