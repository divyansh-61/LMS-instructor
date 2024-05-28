import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsEditcommentpopupComponent } from './comments-editcommentpopup.component';

describe('CommentsEditcommentpopupComponent', () => {
  let component: CommentsEditcommentpopupComponent;
  let fixture: ComponentFixture<CommentsEditcommentpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsEditcommentpopupComponent]
    });
    fixture = TestBed.createComponent(CommentsEditcommentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
