import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSpecificationsComponent } from './product-specifications.component';

describe('ProductSpecificationsComponent', () => {
  let component: ProductSpecificationsComponent;
  let fixture: ComponentFixture<ProductSpecificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSpecificationsComponent]
    });
    fixture = TestBed.createComponent(ProductSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
