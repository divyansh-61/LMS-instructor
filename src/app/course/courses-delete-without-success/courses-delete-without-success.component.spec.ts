import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDeleteWithoutSuccessComponent } from './courses-delete-without-success.component';

describe('CoursesDeleteWithoutSuccessComponent', () => {
  let component: CoursesDeleteWithoutSuccessComponent;
  let fixture: ComponentFixture<CoursesDeleteWithoutSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesDeleteWithoutSuccessComponent]
    });
    fixture = TestBed.createComponent(CoursesDeleteWithoutSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
