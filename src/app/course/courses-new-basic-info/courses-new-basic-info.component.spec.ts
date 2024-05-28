import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNewBasicInfoComponent } from './courses-new-basic-info.component';

describe('CoursesBasicInfoComponent', () => {
  let component: CoursesNewBasicInfoComponent;
  let fixture: ComponentFixture<CoursesNewBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesNewBasicInfoComponent]
    });
    fixture = TestBed.createComponent(CoursesNewBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
