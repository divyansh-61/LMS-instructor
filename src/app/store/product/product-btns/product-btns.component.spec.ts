import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBtnsComponent } from './product-btns.component';

describe('ProductBtnsComponent', () => {
  let component: ProductBtnsComponent;
  let fixture: ComponentFixture<ProductBtnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductBtnsComponent]
    });
    fixture = TestBed.createComponent(ProductBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
