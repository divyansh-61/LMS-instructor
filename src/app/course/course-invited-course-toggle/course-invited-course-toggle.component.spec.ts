import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInvitedCourseToggleOffComponent } from './course-invited-course-toggle.component';

describe('CourseInvitedCourseToggleOffComponent', () => {
  let component: CourseInvitedCourseToggleOffComponent;
  let fixture: ComponentFixture<CourseInvitedCourseToggleOffComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInvitedCourseToggleOffComponent]
    });
    fixture = TestBed.createComponent(CourseInvitedCourseToggleOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
