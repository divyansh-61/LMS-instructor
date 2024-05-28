import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidinganimateCourseComponent } from './slidinganimate-course.component';

describe('SlidinganimateCourseComponent', () => {
  let component: SlidinganimateCourseComponent;
  let fixture: ComponentFixture<SlidinganimateCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlidinganimateCourseComponent]
    });
    fixture = TestBed.createComponent(SlidinganimateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
