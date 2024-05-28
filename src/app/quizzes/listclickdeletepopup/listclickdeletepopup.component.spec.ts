import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListclickdeletepopupComponent } from './listclickdeletepopup.component';

describe('ListclickdeletepopupComponent', () => {
  let component: ListclickdeletepopupComponent;
  let fixture: ComponentFixture<ListclickdeletepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListclickdeletepopupComponent]
    });
    fixture = TestBed.createComponent(ListclickdeletepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
