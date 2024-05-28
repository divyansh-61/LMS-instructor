import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedsuccessfullyComponent } from './addedsuccessfully.component';

describe('AddedsuccessfullyComponent', () => {
  let component: AddedsuccessfullyComponent;
  let fixture: ComponentFixture<AddedsuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedsuccessfullyComponent]
    });
    fixture = TestBed.createComponent(AddedsuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
