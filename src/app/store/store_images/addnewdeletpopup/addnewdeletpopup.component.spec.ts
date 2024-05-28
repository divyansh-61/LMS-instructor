import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewdeletpopupComponent } from './addnewdeletpopup.component';

describe('AddnewdeletpopupComponent', () => {
  let component: AddnewdeletpopupComponent;
  let fixture: ComponentFixture<AddnewdeletpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewdeletpopupComponent]
    });
    fixture = TestBed.createComponent(AddnewdeletpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
