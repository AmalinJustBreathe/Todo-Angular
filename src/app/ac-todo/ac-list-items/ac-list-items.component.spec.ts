import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListItemsComponent } from './ac-list-items.component';

describe('AcListItemsComponent', () => {
  let component: AcListItemsComponent;
  let fixture: ComponentFixture<AcListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
