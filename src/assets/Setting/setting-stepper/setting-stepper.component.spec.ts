import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingStepperComponent } from './setting-stepper.component';

describe('SettingStepperComponent', () => {
  let component: SettingStepperComponent;
  let fixture: ComponentFixture<SettingStepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingStepperComponent]
    });
    fixture = TestBed.createComponent(SettingStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
