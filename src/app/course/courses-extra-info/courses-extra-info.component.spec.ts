import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesExtraInfoComponent } from './courses-extra-info.component';

describe('CoursesExtraInfoComponent', () => {
  let component: CoursesExtraInfoComponent;
  let fixture: ComponentFixture<CoursesExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesExtraInfoComponent]
    });
    fixture = TestBed.createComponent(CoursesExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
