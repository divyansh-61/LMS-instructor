import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMycourseComponent } from './course-mycourse.component';

describe('CourseMycourseComponent', () => {
  let component: CourseMycourseComponent;
  let fixture: ComponentFixture<CourseMycourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMycourseComponent]
    });
    fixture = TestBed.createComponent(CourseMycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
