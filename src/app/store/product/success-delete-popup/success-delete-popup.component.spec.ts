import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessDeletePopupComponent } from './success-delete-popup.component';

describe('SuccessDeletePopupComponent', () => {
  let component: SuccessDeletePopupComponent;
  let fixture: ComponentFixture<SuccessDeletePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuccessDeletePopupComponent]
    });
    fixture = TestBed.createComponent(SuccessDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
