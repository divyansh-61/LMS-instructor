import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseNoticeComponent } from './course-notice.component';

describe('CourseNoticeComponent', () => {
  let component: CourseNoticeComponent;
  let fixture: ComponentFixture<CourseNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseNoticeComponent]
    });
    fixture = TestBed.createComponent(CourseNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
