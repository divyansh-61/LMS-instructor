import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingImagesComponent } from './setting-images.component';

describe('SettingImagesComponent', () => {
  let component: SettingImagesComponent;
  let fixture: ComponentFixture<SettingImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingImagesComponent]
    });
    fixture = TestBed.createComponent(SettingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
