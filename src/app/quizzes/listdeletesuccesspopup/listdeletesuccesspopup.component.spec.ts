import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeletesuccesspopupComponent } from './listdeletesuccesspopup.component';

describe('ListdeletesuccesspopupComponent', () => {
  let component: ListdeletesuccesspopupComponent;
  let fixture: ComponentFixture<ListdeletesuccesspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListdeletesuccesspopupComponent]
    });
    fixture = TestBed.createComponent(ListdeletesuccesspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
