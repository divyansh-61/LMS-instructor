import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessegeToReceverSteprCourseBundleComponent } from './messege-to-recever-stepr-course-bundle.component';

describe('MessegeToReceverSteprCourseBundleComponent', () => {
  let component: MessegeToReceverSteprCourseBundleComponent;
  let fixture: ComponentFixture<MessegeToReceverSteprCourseBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MessegeToReceverSteprCourseBundleComponent]
    });
    fixture = TestBed.createComponent(MessegeToReceverSteprCourseBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
