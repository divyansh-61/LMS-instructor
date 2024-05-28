import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveSuccessfullyComponent } from './remove-successfully.component';

describe('RemoveSuccessfullyComponent', () => {
  let component: RemoveSuccessfullyComponent;
  let fixture: ComponentFixture<RemoveSuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveSuccessfullyComponent]
    });
    fixture = TestBed.createComponent(RemoveSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
