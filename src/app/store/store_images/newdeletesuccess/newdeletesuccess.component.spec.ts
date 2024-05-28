import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeletesuccessComponent } from './newdeletesuccess.component';

describe('NewdeletesuccessComponent', () => {
  let component: NewdeletesuccessComponent;
  let fixture: ComponentFixture<NewdeletesuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdeletesuccessComponent]
    });
    fixture = TestBed.createComponent(NewdeletesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
