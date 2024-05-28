import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMessageToReviewerComponent } from './product-message-to-reviewer.component';

describe('ProductMessageToReviewerComponent', () => {
  let component: ProductMessageToReviewerComponent;
  let fixture: ComponentFixture<ProductMessageToReviewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMessageToReviewerComponent]
    });
    fixture = TestBed.createComponent(ProductMessageToReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
