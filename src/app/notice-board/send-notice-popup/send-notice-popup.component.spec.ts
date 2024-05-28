import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendNoticePopupComponent } from './send-notice-popup.component';

describe('SendNoticePopupComponent', () => {
  let component: SendNoticePopupComponent;
  let fixture: ComponentFixture<SendNoticePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendNoticePopupComponent]
    });
    fixture = TestBed.createComponent(SendNoticePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
