import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmultiplepopupComponent } from './listmultiplepopup.component';

describe('ListmultiplepopupComponent', () => {
  let component: ListmultiplepopupComponent;
  let fixture: ComponentFixture<ListmultiplepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListmultiplepopupComponent]
    });
    fixture = TestBed.createComponent(ListmultiplepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
