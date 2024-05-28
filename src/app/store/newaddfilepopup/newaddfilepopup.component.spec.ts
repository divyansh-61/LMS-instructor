import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaddfilepopupComponent } from './newaddfilepopup.component';

describe('NewaddfilepopupComponent', () => {
  let component: NewaddfilepopupComponent;
  let fixture: ComponentFixture<NewaddfilepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewaddfilepopupComponent]
    });
    fixture = TestBed.createComponent(NewaddfilepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
