import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenewQuizCertificationComponent } from './coursenew-quiz-certification.component';

describe('CoursenewQuizCertificationComponent', () => {
  let component: CoursenewQuizCertificationComponent;
  let fixture: ComponentFixture<CoursenewQuizCertificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursenewQuizCertificationComponent]
    });
    fixture = TestBed.createComponent(CoursenewQuizCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
