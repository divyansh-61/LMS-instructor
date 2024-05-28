import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursebundleFAQComponent } from './coursebundle-faq.component';

describe('CoursebundleFAQComponent', () => {
  let component: CoursebundleFAQComponent;
  let fixture: ComponentFixture<CoursebundleFAQComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursebundleFAQComponent]
    });
    fixture = TestBed.createComponent(CoursebundleFAQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
