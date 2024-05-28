import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseMypurchaseComponent } from './course-mypurchase.component';

describe('CourseMypurchaseComponent', () => {
  let component: CourseMypurchaseComponent;
  let fixture: ComponentFixture<CourseMypurchaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseMypurchaseComponent]
    });
    fixture = TestBed.createComponent(CourseMypurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
