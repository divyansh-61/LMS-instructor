import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssiComponent } from './student-assi.component';

describe('StudentAssiComponent', () => {
  let component: StudentAssiComponent;
  let fixture: ComponentFixture<StudentAssiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentAssiComponent]
    });
    fixture = TestBed.createComponent(StudentAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
