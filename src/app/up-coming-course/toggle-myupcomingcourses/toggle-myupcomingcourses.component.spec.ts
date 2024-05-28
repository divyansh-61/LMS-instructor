import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleMyupcomingcoursesComponent } from './toggle-myupcomingcourses.component';

describe('ToggleMyupcomingcoursesComponent', () => {
  let component: ToggleMyupcomingcoursesComponent;
  let fixture: ComponentFixture<ToggleMyupcomingcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToggleMyupcomingcoursesComponent]
    });
    fixture = TestBed.createComponent(ToggleMyupcomingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
