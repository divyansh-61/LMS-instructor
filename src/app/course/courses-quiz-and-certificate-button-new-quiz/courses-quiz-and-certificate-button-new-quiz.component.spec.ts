import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesQuizAndCertificateButtonNewQuizComponent } from './courses-quiz-and-certificate-button-new-quiz.component';

describe('CoursesQuizAndCertificateButtonNewQuizComponent', () => {
  let component: CoursesQuizAndCertificateButtonNewQuizComponent;
  let fixture: ComponentFixture<CoursesQuizAndCertificateButtonNewQuizComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesQuizAndCertificateButtonNewQuizComponent]
    });
    fixture = TestBed.createComponent(CoursesQuizAndCertificateButtonNewQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
