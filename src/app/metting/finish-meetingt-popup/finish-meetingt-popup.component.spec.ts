import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishMeetingtPopupComponent } from './finish-meetingt-popup.component';

describe('FinishMeetingtPopupComponent', () => {
  let component: FinishMeetingtPopupComponent;
  let fixture: ComponentFixture<FinishMeetingtPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishMeetingtPopupComponent]
    });
    fixture = TestBed.createComponent(FinishMeetingtPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
