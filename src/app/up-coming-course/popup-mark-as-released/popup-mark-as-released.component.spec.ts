import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupMarkAsReleasedComponent } from './popup-mark-as-released.component';

describe('PopupMarkAsReleasedComponent', () => {
  let component: PopupMarkAsReleasedComponent;
  let fixture: ComponentFixture<PopupMarkAsReleasedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupMarkAsReleasedComponent]
    });
    fixture = TestBed.createComponent(PopupMarkAsReleasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
