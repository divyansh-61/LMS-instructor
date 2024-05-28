import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportFinanComponent } from './sales-report-finan.component';

describe('SalesReportFinanComponent', () => {
  let component: SalesReportFinanComponent;
  let fixture: ComponentFixture<SalesReportFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesReportFinanComponent]
    });
    fixture = TestBed.createComponent(SalesReportFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
