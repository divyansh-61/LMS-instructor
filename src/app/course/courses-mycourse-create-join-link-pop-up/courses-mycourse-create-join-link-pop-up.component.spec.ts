import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMycourseCreateJoinLinkPopUpComponent } from './courses-mycourse-create-join-link-pop-up.component';

describe('CoursesMycourseCreateJoinLinkPopUpComponent', () => {
  let component: CoursesMycourseCreateJoinLinkPopUpComponent;
  let fixture: ComponentFixture<CoursesMycourseCreateJoinLinkPopUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesMycourseCreateJoinLinkPopUpComponent]
    });
    fixture = TestBed.createComponent(CoursesMycourseCreateJoinLinkPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
