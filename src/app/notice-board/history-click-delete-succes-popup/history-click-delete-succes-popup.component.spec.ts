import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClickDeleteSuccesPopupComponent } from './history-click-delete-succes-popup.component';

describe('HistoryClickDeleteSuccesPopupComponent', () => {
  let component: HistoryClickDeleteSuccesPopupComponent;
  let fixture: ComponentFixture<HistoryClickDeleteSuccesPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryClickDeleteSuccesPopupComponent]
    });
    fixture = TestBed.createComponent(HistoryClickDeleteSuccesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
