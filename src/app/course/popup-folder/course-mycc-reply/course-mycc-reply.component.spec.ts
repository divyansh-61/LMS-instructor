import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMyccReplyComponent } from './course-mycc-reply.component';

describe('CourseMyccReplyComponent', () => {
  let component: CourseMyccReplyComponent;
  let fixture: ComponentFixture<CourseMyccReplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMyccReplyComponent]
    });
    fixture = TestBed.createComponent(CourseMyccReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
