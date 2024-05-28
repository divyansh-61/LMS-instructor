import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalestrackingpopupComponent } from './salestrackingpopup.component';

describe('SalestrackingpopupComponent', () => {
  let component: SalestrackingpopupComponent;
  let fixture: ComponentFixture<SalestrackingpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalestrackingpopupComponent]
    });
    fixture = TestBed.createComponent(SalestrackingpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
