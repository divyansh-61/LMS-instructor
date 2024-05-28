import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSteperComponent } from './new-steper.component';

describe('NewSteperComponent', () => {
  let component: NewSteperComponent;
  let fixture: ComponentFixture<NewSteperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSteperComponent]
    });
    fixture = TestBed.createComponent(NewSteperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
