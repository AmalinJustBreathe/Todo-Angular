import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListCounterComponent } from './ac-list-counter.component';

describe('AcListCounterComponent', () => {
  let component: AcListCounterComponent;
  let fixture: ComponentFixture<AcListCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
