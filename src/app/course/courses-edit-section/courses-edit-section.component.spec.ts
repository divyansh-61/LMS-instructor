import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEditSectionComponent } from './courses-edit-section.component';

describe('CoursesEditSectionComponent', () => {
  let component: CoursesEditSectionComponent;
  let fixture: ComponentFixture<CoursesEditSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesEditSectionComponent]
    });
    fixture = TestBed.createComponent(CoursesEditSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
