import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcListFooterComponent } from './ac-list-footer.component';

describe('AcListFooterComponent', () => {
  let component: AcListFooterComponent;
  let fixture: ComponentFixture<AcListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
