import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewimagesComponent } from './newimages.component';

describe('NewimagesComponent', () => {
  let component: NewimagesComponent;
  let fixture: ComponentFixture<NewimagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewimagesComponent]
    });
    fixture = TestBed.createComponent(NewimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
