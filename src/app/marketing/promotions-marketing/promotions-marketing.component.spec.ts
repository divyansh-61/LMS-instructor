import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionsMarketingComponent } from './promotions-marketing.component';

describe('PromotionsMarketingComponent', () => {
  let component: PromotionsMarketingComponent;
  let fixture: ComponentFixture<PromotionsMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotionsMarketingComponent]
    });
    fixture = TestBed.createComponent(PromotionsMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
