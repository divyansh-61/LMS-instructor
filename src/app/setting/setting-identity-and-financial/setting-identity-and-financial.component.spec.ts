import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingIdentityAndFinancialComponent } from './setting-identity-and-financial.component';

describe('SettingIdentityAndFinancialComponent', () => {
  let component: SettingIdentityAndFinancialComponent;
  let fixture: ComponentFixture<SettingIdentityAndFinancialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingIdentityAndFinancialComponent]
    });
    fixture = TestBed.createComponent(SettingIdentityAndFinancialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
