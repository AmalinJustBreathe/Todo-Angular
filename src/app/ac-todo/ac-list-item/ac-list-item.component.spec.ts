import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListItemComponent } from './ac-list-item.component';

describe('AcListItemComponent', () => {
  let component: AcListItemComponent;
  let fixture: ComponentFixture<AcListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
