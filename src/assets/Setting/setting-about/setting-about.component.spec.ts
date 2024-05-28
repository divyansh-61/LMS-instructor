import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingAboutComponent } from './setting-about.component';

describe('SettingAboutComponent', () => {
  let component: SettingAboutComponent;
  let fixture: ComponentFixture<SettingAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingAboutComponent]
    });
    fixture = TestBed.createComponent(SettingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
