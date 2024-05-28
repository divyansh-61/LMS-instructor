import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenewPrerequisitesComponent } from './coursenew-prerequisites.component';

describe('CoursenewPrerequisitesComponent', () => {
  let component: CoursenewPrerequisitesComponent;
  let fixture: ComponentFixture<CoursenewPrerequisitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursenewPrerequisitesComponent]
    });
    fixture = TestBed.createComponent(CoursenewPrerequisitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
