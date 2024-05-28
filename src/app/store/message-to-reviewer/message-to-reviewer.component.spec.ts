import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageToReviewerComponent } from './message-to-reviewer.component';

describe('MessageToReviewerComponent', () => {
  let component: MessageToReviewerComponent;
  let fixture: ComponentFixture<MessageToReviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessageToReviewerComponent]
    });
    fixture = TestBed.createComponent(MessageToReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
