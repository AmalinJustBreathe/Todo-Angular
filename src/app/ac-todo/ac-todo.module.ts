import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './ac-todo.component';
import { AcListHeaderComponent } from './ac-list-header/ac-list-header.component';
import { AcListMainComponent } from './ac-list-main/ac-list-main.component';
import { AcListFooterComponent } from './ac-list-footer/ac-list-footer.component';
import { AcListInputComponent } from './ac-list-input/ac-list-input.component';
import { AcListToggleComponent } from './ac-list-toggle/ac-list-toggle.component';
import { AcListItemsComponent } from './ac-list-items/ac-list-items.component';
import { AcListCounterComponent } from './ac-list-counter/ac-list-counter.component';
import { AcListClearBtnComponent } from './ac-list-clear-btn/ac-list-clear-btn.component';
import { AcListTitleComponent } from './ac-list-title/ac-list-title.component';
import { AcListItemComponent } from './ac-list-item/ac-list-item.component';
import { ListService } from "./list.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ListService],
  declarations: [TodoComponent,
    AcListHeaderComponent,
    AcListMainComponent,
    AcListFooterComponent,
    AcListInputComponent,
    AcListToggleComponent,
    AcListItemsComponent,
    AcListCounterComponent,
    AcListClearBtnComponent,
    AcListTitleComponent,
    AcListItemComponent],
  exports: [TodoComponent]

})
export class TodoModule { }
