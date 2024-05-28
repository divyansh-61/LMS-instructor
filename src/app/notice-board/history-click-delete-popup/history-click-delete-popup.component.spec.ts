import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClickDeletePopupComponent } from './history-click-delete-popup.component';

describe('HistoryClickDeletePopupComponent', () => {
  let component: HistoryClickDeletePopupComponent;
  let fixture: ComponentFixture<HistoryClickDeletePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryClickDeletePopupComponent]
    });
    fixture = TestBed.createComponent(HistoryClickDeletePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
