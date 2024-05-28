import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesItemsAddedSuccessComponent } from './courses-items-added-success.component';

describe('CoursesItemsAddedSuccessComponent', () => {
  let component: CoursesItemsAddedSuccessComponent;
  let fixture: ComponentFixture<CoursesItemsAddedSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesItemsAddedSuccessComponent]
    });
    fixture = TestBed.createComponent(CoursesItemsAddedSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
