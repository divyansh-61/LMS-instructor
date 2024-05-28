import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstallmentFinanComponent } from './installment-finan.component';

describe('InstallmentFinanComponent', () => {
  let component: InstallmentFinanComponent;
  let fixture: ComponentFixture<InstallmentFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstallmentFinanComponent]
    });
    fixture = TestBed.createComponent(InstallmentFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
