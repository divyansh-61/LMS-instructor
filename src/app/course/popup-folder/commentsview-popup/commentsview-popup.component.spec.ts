import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsviewPopupComponent } from './commentsview-popup.component';

describe('CommentsviewPopupComponent', () => {
  let component: CommentsviewPopupComponent;
  let fixture: ComponentFixture<CommentsviewPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsviewPopupComponent]
    });
    fixture = TestBed.createComponent(CommentsviewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
