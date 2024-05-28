import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassageToReviewerComponent } from './massage-to-reviewer.component';

describe('MassageToReviewerComponent', () => {
  let component: MassageToReviewerComponent;
  let fixture: ComponentFixture<MassageToReviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassageToReviewerComponent]
    });
    fixture = TestBed.createComponent(MassageToReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
