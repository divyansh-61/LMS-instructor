import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStudentAssiComponent } from './all-student-assi.component';

describe('AllStudentAssiComponent', () => {
  let component: AllStudentAssiComponent;
  let fixture: ComponentFixture<AllStudentAssiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllStudentAssiComponent]
    });
    fixture = TestBed.createComponent(AllStudentAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
