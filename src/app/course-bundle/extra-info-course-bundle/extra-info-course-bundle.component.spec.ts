import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraInfoCourseBundleComponent } from './extra-info-course-bundle.component';

describe('ExtraInfoCourseBundleComponent', () => {
  let component: ExtraInfoCourseBundleComponent;
  let fixture: ComponentFixture<ExtraInfoCourseBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtraInfoCourseBundleComponent]
    });
    fixture = TestBed.createComponent(ExtraInfoCourseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
