import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingEducationComponent } from './setting-education.component';

describe('SettingEducationComponent', () => {
  let component: SettingEducationComponent;
  let fixture: ComponentFixture<SettingEducationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingEducationComponent]
    });
    fixture = TestBed.createComponent(SettingEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
