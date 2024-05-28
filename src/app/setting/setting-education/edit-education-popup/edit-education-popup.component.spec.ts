import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEducationPopupComponent } from './edit-education-popup.component';

describe('EditEducationPopupComponent', () => {
  let component: EditEducationPopupComponent;
  let fixture: ComponentFixture<EditEducationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEducationPopupComponent]
    });
    fixture = TestBed.createComponent(EditEducationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
