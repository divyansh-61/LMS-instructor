import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseBundleComponent } from './new-course-bundle.component';

describe('NewCourseBundleComponent', () => {
  let component: NewCourseBundleComponent;
  let fixture: ComponentFixture<NewCourseBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewCourseBundleComponent]
    });
    fixture = TestBed.createComponent(NewCourseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
