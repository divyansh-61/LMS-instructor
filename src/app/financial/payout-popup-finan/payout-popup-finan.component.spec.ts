import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutPopupFinanComponent } from './payout-popup-finan.component';

describe('PayoutPopupFinanComponent', () => {
  let component: PayoutPopupFinanComponent;
  let fixture: ComponentFixture<PayoutPopupFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutPopupFinanComponent]
    });
    fixture = TestBed.createComponent(PayoutPopupFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
