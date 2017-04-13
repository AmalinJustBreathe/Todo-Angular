import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListMainComponent } from './ac-list-main.component';

describe('AcListMainComponent', () => {
  let component: AcListMainComponent;
  let fixture: ComponentFixture<AcListMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
