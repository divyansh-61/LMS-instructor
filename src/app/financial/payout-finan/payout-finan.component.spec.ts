import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayoutFinanComponent } from './payout-finan.component';

describe('PayoutFinanComponent', () => {
  let component: PayoutFinanComponent;
  let fixture: ComponentFixture<PayoutFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayoutFinanComponent]
    });
    fixture = TestBed.createComponent(PayoutFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
