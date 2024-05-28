import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopupMyBundleCourseComponent } from './delete-popup-my-bundle-course.component';

describe('DeletePopupMyBundleCourseComponent', () => {
  let component: DeletePopupMyBundleCourseComponent;
  let fixture: ComponentFixture<DeletePopupMyBundleCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePopupMyBundleCourseComponent]
    });
    fixture = TestBed.createComponent(DeletePopupMyBundleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
