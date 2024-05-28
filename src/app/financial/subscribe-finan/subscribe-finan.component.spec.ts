import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeFinanComponent } from './subscribe-finan.component';

describe('SubscribeFinanComponent', () => {
  let component: SubscribeFinanComponent;
  let fixture: ComponentFixture<SubscribeFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubscribeFinanComponent]
    });
    fixture = TestBed.createComponent(SubscribeFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
