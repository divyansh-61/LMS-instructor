import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultreviewComponent } from './resultreview.component';

describe('ResultreviewComponent', () => {
  let component: ResultreviewComponent;
  let fixture: ComponentFixture<ResultreviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultreviewComponent]
    });
    fixture = TestBed.createComponent(ResultreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
