import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ac-list-footer',
  template: `
    <footer class="footer">
      <ng-content></ng-content>
    </footer>
  `,
  styleUrls: ['ac-list-footer.component.css']
})
export class AcListFooterComponent {
}
