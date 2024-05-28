import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryClickViewComponent } from './history-click-view.component';

describe('HistoryClickViewComponent', () => {
  let component: HistoryClickViewComponent;
  let fixture: ComponentFixture<HistoryClickViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryClickViewComponent]
    });
    fixture = TestBed.createComponent(HistoryClickViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
