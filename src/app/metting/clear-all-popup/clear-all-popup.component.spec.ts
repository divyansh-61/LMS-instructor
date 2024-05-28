import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearAllPopupComponent } from './clear-all-popup.component';

describe('ClearAllPopupComponent', () => {
  let component: ClearAllPopupComponent;
  let fixture: ComponentFixture<ClearAllPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClearAllPopupComponent]
    });
    fixture = TestBed.createComponent(ClearAllPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
