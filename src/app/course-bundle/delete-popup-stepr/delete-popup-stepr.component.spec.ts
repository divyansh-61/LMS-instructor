import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePopupSteprComponent } from './delete-popup-stepr.component';

describe('DeletePopupSteprComponent', () => {
  let component: DeletePopupSteprComponent;
  let fixture: ComponentFixture<DeletePopupSteprComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletePopupSteprComponent]
    });
    fixture = TestBed.createComponent(DeletePopupSteprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
