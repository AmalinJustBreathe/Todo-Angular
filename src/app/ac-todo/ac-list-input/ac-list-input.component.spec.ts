import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListInputComponent } from './ac-list-input.component';

describe('AcListInputComponent', () => {
  let component: AcListInputComponent;
  let fixture: ComponentFixture<AcListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
