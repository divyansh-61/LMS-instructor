import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesFAQComponent } from './courses-faq.component';

describe('CoursesFAQComponent', () => {
  let component: CoursesFAQComponent;
  let fixture: ComponentFixture<CoursesFAQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesFAQComponent]
    });
    fixture = TestBed.createComponent(CoursesFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
