import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactStudentPopupComponent } from './contact-student-popup.component';

describe('ContactStudentPopupComponent', () => {
  let component: ContactStudentPopupComponent;
  let fixture: ComponentFixture<ContactStudentPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactStudentPopupComponent]
    });
    fixture = TestBed.createComponent(ContactStudentPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
