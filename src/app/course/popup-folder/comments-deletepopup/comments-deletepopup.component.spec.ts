import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsDeletepopupComponent } from './comments-deletepopup.component';

describe('CommentsDeletepopupComponent', () => {
  let component: CommentsDeletepopupComponent;
  let fixture: ComponentFixture<CommentsDeletepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentsDeletepopupComponent]
    });
    fixture = TestBed.createComponent(CommentsDeletepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
