import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesNewContentComponent } from './courses-new-content.component';

describe('CoursesNewContentComponent', () => {
  let component: CoursesNewContentComponent;
  let fixture: ComponentFixture<CoursesNewContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesNewContentComponent]
    });
    fixture = TestBed.createComponent(CoursesNewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
