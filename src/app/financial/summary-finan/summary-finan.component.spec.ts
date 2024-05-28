import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFinanComponent } from './summary-finan.component';

describe('SummaryFinanComponent', () => {
  let component: SummaryFinanComponent;
  let fixture: ComponentFixture<SummaryFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryFinanComponent]
    });
    fixture = TestBed.createComponent(SummaryFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
