import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesMycourseToggleButtonComponent } from './courses-mycourse-toggle-button.component';

describe('CoursesMycourseToggleButtonComponent', () => {
  let component: CoursesMycourseToggleButtonComponent;
  let fixture: ComponentFixture<CoursesMycourseToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesMycourseToggleButtonComponent]
    });
    fixture = TestBed.createComponent(CoursesMycourseToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
