import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListToggleComponent } from './ac-list-toggle.component';

describe('AcListToggleComponent', () => {
  let component: AcListToggleComponent;
  let fixture: ComponentFixture<AcListToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
