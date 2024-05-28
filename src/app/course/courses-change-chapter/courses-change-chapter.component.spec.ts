import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesChangeChapterComponent } from './courses-change-chapter.component';

describe('CoursesChangeChapterComponent', () => {
  let component: CoursesChangeChapterComponent;
  let fixture: ComponentFixture<CoursesChangeChapterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesChangeChapterComponent]
    });
    fixture = TestBed.createComponent(CoursesChangeChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
