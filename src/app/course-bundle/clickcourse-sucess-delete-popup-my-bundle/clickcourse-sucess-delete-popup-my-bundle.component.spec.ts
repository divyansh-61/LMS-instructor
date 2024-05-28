import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickcourseSucessDeletePopupMyBundleComponent } from './clickcourse-sucess-delete-popup-my-bundle.component';

describe('ClickcourseSucessDeletePopupMyBundleComponent', () => {
  let component: ClickcourseSucessDeletePopupMyBundleComponent;
  let fixture: ComponentFixture<ClickcourseSucessDeletePopupMyBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickcourseSucessDeletePopupMyBundleComponent]
    });
    fixture = TestBed.createComponent(ClickcourseSucessDeletePopupMyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
