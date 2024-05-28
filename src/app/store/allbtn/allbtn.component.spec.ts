import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbtnComponent } from './allbtn.component';

describe('AllbtnComponent', () => {
  let component: AllbtnComponent;
  let fixture: ComponentFixture<AllbtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllbtnComponent]
    });
    fixture = TestBed.createComponent(AllbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
