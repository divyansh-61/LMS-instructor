import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingExperiencesComponent } from './setting-experiences.component';

describe('SettingExperiencesComponent', () => {
  let component: SettingExperiencesComponent;
  let fixture: ComponentFixture<SettingExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingExperiencesComponent]
    });
    fixture = TestBed.createComponent(SettingExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
