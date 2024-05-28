import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSteperUpcomeComponent } from './new-steper-upcome.component';

describe('NewSteperUpcomeComponent', () => {
  let component: NewSteperUpcomeComponent;
  let fixture: ComponentFixture<NewSteperUpcomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSteperUpcomeComponent]
    });
    fixture = TestBed.createComponent(NewSteperUpcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
