import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingZoomApiComponent } from './setting-zoom-api.component';

describe('SettingZoomApiComponent', () => {
  let component: SettingZoomApiComponent;
  let fixture: ComponentFixture<SettingZoomApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingZoomApiComponent]
    });
    fixture = TestBed.createComponent(SettingZoomApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
