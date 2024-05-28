import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMycommentsComponent } from './course-mycomments.component';

describe('CourseMycommentsComponent', () => {
  let component: CourseMycommentsComponent;
  let fixture: ComponentFixture<CourseMycommentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMycommentsComponent]
    });
    fixture = TestBed.createComponent(CourseMycommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
