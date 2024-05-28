import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesPricingButtonNewPlanComponent } from './courses-pricing-button-new-plan.component';

describe('CoursesPricingButtonNewPlanComponent', () => {
  let component: CoursesPricingButtonNewPlanComponent;
  let fixture: ComponentFixture<CoursesPricingButtonNewPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesPricingButtonNewPlanComponent]
    });
    fixture = TestBed.createComponent(CoursesPricingButtonNewPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
