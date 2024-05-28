import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaasFinanComponent } from './saas-finan.component';

describe('SaasFinanComponent', () => {
  let component: SaasFinanComponent;
  let fixture: ComponentFixture<SaasFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaasFinanComponent]
    });
    fixture = TestBed.createComponent(SaasFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
