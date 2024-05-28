import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClickEditComponent } from './history-click-edit.component';

describe('HistoryClickEditComponent', () => {
  let component: HistoryClickEditComponent;
  let fixture: ComponentFixture<HistoryClickEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryClickEditComponent]
    });
    fixture = TestBed.createComponent(HistoryClickEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
