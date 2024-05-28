import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseOrganisationcoursesComponent } from './course-organisationcourses.component';

describe('CourseOrganisationcoursesComponent', () => {
  let component: CourseOrganisationcoursesComponent;
  let fixture: ComponentFixture<CourseOrganisationcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseOrganisationcoursesComponent]
    });
    fixture = TestBed.createComponent(CourseOrganisationcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
