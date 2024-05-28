import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedpopupComponent } from './generatedpopup.component';

describe('GeneratedpopupComponent', () => {
  let component: GeneratedpopupComponent;
  let fixture: ComponentFixture<GeneratedpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedpopupComponent]
    });
    fixture = TestBed.createComponent(GeneratedpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
