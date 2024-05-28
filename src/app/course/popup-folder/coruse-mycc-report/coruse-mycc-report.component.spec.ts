import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoruseMyccReportComponent } from './coruse-mycc-report.component';

describe('CoruseMyccReportComponent', () => {
  let component: CoruseMyccReportComponent;
  let fixture: ComponentFixture<CoruseMyccReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoruseMyccReportComponent]
    });
    fixture = TestBed.createComponent(CoruseMyccReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
