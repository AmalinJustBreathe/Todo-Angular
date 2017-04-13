import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-list-main',
  template: `
    <section class="main">
      <ng-content></ng-content>
    </section>
  `,
  styles: [`
      .main {
        position: relative;
        z-index: 2;
        border-top: 1px solid #e6e6e6;
      }
  `]
})
export class AcListMainComponent {

 }
