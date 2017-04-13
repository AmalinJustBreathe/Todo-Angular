import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListTitleComponent } from './ac-list-title.component';

describe('AcListTitleComponent', () => {
  let component: AcListTitleComponent;
  let fixture: ComponentFixture<AcListTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
