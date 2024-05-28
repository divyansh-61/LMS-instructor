import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingReviewStudentAssiComponent } from './pending-review-student-assi.component';

describe('PendingReviewStudentAssiComponent', () => {
  let component: PendingReviewStudentAssiComponent;
  let fixture: ComponentFixture<PendingReviewStudentAssiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PendingReviewStudentAssiComponent]
    });
    fixture = TestBed.createComponent(PendingReviewStudentAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
