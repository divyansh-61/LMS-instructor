import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscontMarketingComponent } from './discont-marketing.component';

describe('DiscontMarketingComponent', () => {
  let component: DiscontMarketingComponent;
  let fixture: ComponentFixture<DiscontMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscontMarketingComponent]
    });
    fixture = TestBed.createComponent(DiscontMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
