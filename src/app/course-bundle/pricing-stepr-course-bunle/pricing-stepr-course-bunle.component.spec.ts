import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSteprCourseBunleComponent } from './pricing-stepr-course-bunle.component';

describe('PricingSteprCourseBunleComponent', () => {
  let component: PricingSteprCourseBunleComponent;
  let fixture: ComponentFixture<PricingSteprCourseBunleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricingSteprCourseBunleComponent]
    });
    fixture = TestBed.createComponent(PricingSteprCourseBunleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
