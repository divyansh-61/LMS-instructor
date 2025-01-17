import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateValidationComponent } from './certificate-validation.component';

describe('CertificateValidationComponent', () => {
  let component: CertificateValidationComponent;
  let fixture: ComponentFixture<CertificateValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateValidationComponent]
    });
    fixture = TestBed.createComponent(CertificateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
