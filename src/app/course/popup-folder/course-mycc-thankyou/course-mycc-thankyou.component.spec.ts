import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMyccThankyouComponent } from './course-mycc-thankyou.component';

describe('CourseMyccThankyouComponent', () => {
  let component: CourseMyccThankyouComponent;
  let fixture: ComponentFixture<CourseMyccThankyouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMyccThankyouComponent]
    });
    fixture = TestBed.createComponent(CourseMyccThankyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
