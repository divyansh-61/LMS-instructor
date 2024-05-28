import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingCoursesComponent } from './following-courses.component';

describe('FollowingCoursesComponent', () => {
  let component: FollowingCoursesComponent;
  let fixture: ComponentFixture<FollowingCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowingCoursesComponent]
    });
    fixture = TestBed.createComponent(FollowingCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
