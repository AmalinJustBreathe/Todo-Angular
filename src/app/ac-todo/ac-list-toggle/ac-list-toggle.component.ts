import { Component, OnInit } from '@angular/core';
import { ListService } from "../list.service";

@Component({
  selector: 'ac-list-toggle',
  template: `
    <input class="toggle-all"
        (click)="toggleAll($event.target)"
        type="checkbox">
  `,
  styleUrls: ['ac-list-toggle.component.css']
})
export class AcListToggleComponent implements OnInit {

  constructor(private list: ListService) {
  }

  ngOnInit() {
  }

  toggleAll(val) {
    console.log(val.checked);
    this.list.toggleAll(val.checked);
  }

}
