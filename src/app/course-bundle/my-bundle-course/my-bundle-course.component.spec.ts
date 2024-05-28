import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBundleCourseComponent } from './my-bundle-course.component';

describe('MyBundleCourseComponent', () => {
  let component: MyBundleCourseComponent;
  let fixture: ComponentFixture<MyBundleCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBundleCourseComponent]
    });
    fixture = TestBed.createComponent(MyBundleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
