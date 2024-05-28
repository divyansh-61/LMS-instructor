import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMycoursecomponentComponent } from './course-mycoursecomponent.component';

describe('CourseMycoursecomponentComponent', () => {
  let component: CourseMycoursecomponentComponent;
  let fixture: ComponentFixture<CourseMycoursecomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMycoursecomponentComponent]
    });
    fixture = TestBed.createComponent(CourseMycoursecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
