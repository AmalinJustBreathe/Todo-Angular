import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListHeaderComponent } from './ac-list-header.component';

describe('AcListHeaderComponent', () => {
  let component: AcListHeaderComponent;
  let fixture: ComponentFixture<AcListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
