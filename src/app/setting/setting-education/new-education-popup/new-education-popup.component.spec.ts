import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEducationPopupComponent } from './new-education-popup.component';

describe('NewEducationPopupComponent', () => {
  let component: NewEducationPopupComponent;
  let fixture: ComponentFixture<NewEducationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEducationPopupComponent]
    });
    fixture = TestBed.createComponent(NewEducationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
