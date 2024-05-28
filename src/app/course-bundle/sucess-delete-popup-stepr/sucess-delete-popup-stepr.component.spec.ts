import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessDeletePopupSteprComponent } from './sucess-delete-popup-stepr.component';

describe('SucessDeletePopupSteprComponent', () => {
  let component: SucessDeletePopupSteprComponent;
  let fixture: ComponentFixture<SucessDeletePopupSteprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessDeletePopupSteprComponent]
    });
    fixture = TestBed.createComponent(SucessDeletePopupSteprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
