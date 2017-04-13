import { Component, Input } from '@angular/core';

@Component({
  selector: 'ac-list-title',
  template: `   
    <h1>{{title}}</h1>
  `,
  styles: [`    
        h1 {
            position: absolute;
            top: -155px;
            width: 100%;
            font-size: 12vh;
            font-weight: 100;
            text-align: center;
            color: rgba(175, 47, 47, 0.15);
            -webkit-text-rendering: optimizeLegibility;
            -moz-text-rendering: optimizeLegibility;
            text-rendering: optimizeLegibility;
        }
  `]
})
export class AcListTitleComponent {

   @Input() title: string;

}
