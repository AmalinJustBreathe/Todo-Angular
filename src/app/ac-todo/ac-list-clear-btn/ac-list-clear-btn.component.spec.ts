import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListClearBtnComponent } from './ac-list-clear-btn.component';

describe('AcListClearBtnComponent', () => {
  let component: AcListClearBtnComponent;
  let fixture: ComponentFixture<AcListClearBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListClearBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListClearBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
