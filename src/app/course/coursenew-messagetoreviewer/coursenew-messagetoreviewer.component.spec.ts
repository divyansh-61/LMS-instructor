import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenewMessagetoreviewerComponent } from './coursenew-messagetoreviewer.component';

describe('CoursenewMessagetoreviewerComponent', () => {
  let component: CoursenewMessagetoreviewerComponent;
  let fixture: ComponentFixture<CoursenewMessagetoreviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursenewMessagetoreviewerComponent]
    });
    fixture = TestBed.createComponent(CoursenewMessagetoreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
