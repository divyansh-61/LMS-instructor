import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductExtraInfoComponent } from './product-extra-info.component';

describe('ProductExtraInfoComponent', () => {
  let component: ProductExtraInfoComponent;
  let fixture: ComponentFixture<ProductExtraInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductExtraInfoComponent]
    });
    fixture = TestBed.createComponent(ProductExtraInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
