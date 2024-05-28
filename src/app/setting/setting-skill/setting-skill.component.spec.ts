import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingSkillComponent } from './setting-skill.component';

describe('SettingSkillComponent', () => {
  let component: SettingSkillComponent;
  let fixture: ComponentFixture<SettingSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingSkillComponent]
    });
    fixture = TestBed.createComponent(SettingSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
