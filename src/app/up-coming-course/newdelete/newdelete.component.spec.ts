import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdeleteComponent } from './newdelete.component';

describe('NewdeleteComponent', () => {
  let component: NewdeleteComponent;
  let fixture: ComponentFixture<NewdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewdeleteComponent]
    });
    fixture = TestBed.createComponent(NewdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
