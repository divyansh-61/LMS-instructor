import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeditsavepopupComponent } from './listeditsavepopup.component';

describe('ListeditsavepopupComponent', () => {
  let component: ListeditsavepopupComponent;
  let fixture: ComponentFixture<ListeditsavepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeditsavepopupComponent]
    });
    fixture = TestBed.createComponent(ListeditsavepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
