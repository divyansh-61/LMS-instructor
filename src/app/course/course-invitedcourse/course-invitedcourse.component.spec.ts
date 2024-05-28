import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInvitedcourseComponent } from './course-invitedcourse.component';

describe('CourseInvitedcourseComponent', () => {
  let component: CourseInvitedcourseComponent;
  let fixture: ComponentFixture<CourseInvitedcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseInvitedcourseComponent]
    });
    fixture = TestBed.createComponent(CourseInvitedcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
