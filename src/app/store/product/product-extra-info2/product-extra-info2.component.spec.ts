import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExtraInfo2Component } from './product-extra-info2.component';

describe('ProductExtraInfo2Component', () => {
  let component: ProductExtraInfo2Component;
  let fixture: ComponentFixture<ProductExtraInfo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductExtraInfo2Component]
    });
    fixture = TestBed.createComponent(ProductExtraInfo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
