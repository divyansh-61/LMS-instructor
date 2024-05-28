import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourseNoticeComponent } from './newcourse-notice.component';

describe('NewcourseNoticeComponent', () => {
  let component: NewcourseNoticeComponent;
  let fixture: ComponentFixture<NewcourseNoticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewcourseNoticeComponent]
    });
    fixture = TestBed.createComponent(NewcourseNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
