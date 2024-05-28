import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsEditCommentSuccesspopupComponent } from './comments-edit-comment-successpopup.component';

describe('CommentsEditCommentSuccesspopupComponent', () => {
  let component: CommentsEditCommentSuccesspopupComponent;
  let fixture: ComponentFixture<CommentsEditCommentSuccesspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsEditCommentSuccesspopupComponent]
    });
    fixture = TestBed.createComponent(CommentsEditCommentSuccesspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
