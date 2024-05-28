import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpopupComponent } from './viewpopup.component';

describe('ViewpopupComponent', () => {
  let component: ViewpopupComponent;
  let fixture: ComponentFixture<ViewpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewpopupComponent]
    });
    fixture = TestBed.createComponent(ViewpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
