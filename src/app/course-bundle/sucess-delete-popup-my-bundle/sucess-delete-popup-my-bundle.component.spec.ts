import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDeletePopupMyBundleComponent } from './sucess-delete-popup-my-bundle.component';

describe('SucessDeletePopupMyBundleComponent', () => {
  let component: SucessDeletePopupMyBundleComponent;
  let fixture: ComponentFixture<SucessDeletePopupMyBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessDeletePopupMyBundleComponent]
    });
    fixture = TestBed.createComponent(SucessDeletePopupMyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
