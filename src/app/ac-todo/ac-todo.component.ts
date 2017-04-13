import { Component, OnInit } from '@angular/core';
import { ListService } from "./list.service";

@Component({
  selector: 'ac-todo',
  templateUrl: 'ac-todo.component.html',
  styleUrls: ['ac-todo.component.css']
})
export class TodoComponent {

  constructor(private list : ListService) {
  }

}
 


