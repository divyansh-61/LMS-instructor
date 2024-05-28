import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesExtraInfoToggleButtonComponent } from './courses-extra-info-toggle-button.component';

describe('CoursesExtraInfoToggleButtonComponent', () => {
  let component: CoursesExtraInfoToggleButtonComponent;
  let fixture: ComponentFixture<CoursesExtraInfoToggleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesExtraInfoToggleButtonComponent]
    });
    fixture = TestBed.createComponent(CoursesExtraInfoToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
