import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcourseDeletePopupMyBundleComponent } from './clickcourse-delete-popup-my-bundle.component';

describe('ClickcourseDeletePopupMyBundleComponent', () => {
  let component: ClickcourseDeletePopupMyBundleComponent;
  let fixture: ComponentFixture<ClickcourseDeletePopupMyBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickcourseDeletePopupMyBundleComponent]
    });
    fixture = TestBed.createComponent(ClickcourseDeletePopupMyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
