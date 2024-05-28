import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingExtraInfoComponent } from './setting-extra-info.component';

describe('SettingExtraInfoComponent', () => {
  let component: SettingExtraInfoComponent;
  let fixture: ComponentFixture<SettingExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingExtraInfoComponent]
    });
    fixture = TestBed.createComponent(SettingExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
