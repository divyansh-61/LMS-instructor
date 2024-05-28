import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepprCourseBundleComponent } from './steppr-course-bundle.component';

describe('StepprCourseBundleComponent', () => {
  let component: StepprCourseBundleComponent;
  let fixture: ComponentFixture<StepprCourseBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StepprCourseBundleComponent]
    });
    fixture = TestBed.createComponent(StepprCourseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
