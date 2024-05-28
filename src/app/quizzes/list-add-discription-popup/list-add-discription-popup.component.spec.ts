import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddDiscriptionPopupComponent } from './list-add-discription-popup.component';

describe('ListAddDiscriptionPopupComponent', () => {
  let component: ListAddDiscriptionPopupComponent;
  let fixture: ComponentFixture<ListAddDiscriptionPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAddDiscriptionPopupComponent]
    });
    fixture = TestBed.createComponent(ListAddDiscriptionPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
