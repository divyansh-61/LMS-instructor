import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimePopupComponent } from './addtime-popup.component';

describe('AddtimePopupComponent', () => {
  let component: AddtimePopupComponent;
  let fixture: ComponentFixture<AddtimePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddtimePopupComponent]
    });
    fixture = TestBed.createComponent(AddtimePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
