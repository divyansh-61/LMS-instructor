import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateOfflineStatusToggleComponent } from './activate-offline-status-toggle.component';

describe('ActivateOfflineStatusToggleComponent', () => {
  let component: ActivateOfflineStatusToggleComponent;
  let fixture: ComponentFixture<ActivateOfflineStatusToggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateOfflineStatusToggleComponent]
    });
    fixture = TestBed.createComponent(ActivateOfflineStatusToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
