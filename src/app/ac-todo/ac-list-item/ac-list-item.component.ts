import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ListService } from "../list.service";
import { Item } from '../item.interface';

@Component({
  selector: 'ac-list-item',
  templateUrl: 'ac-list-item.component.html',
  styleUrls: ['ac-list-item.component.css']
})
export class AcListItemComponent {

  @Input() item: Item;

  private editMode : boolean;
  
  constructor(private list : ListService) {
  }

  private updateItem(newVal: string) : void {
    this.editMode = false;
    this.list.updateItem(this.item, newVal);
  }

}
