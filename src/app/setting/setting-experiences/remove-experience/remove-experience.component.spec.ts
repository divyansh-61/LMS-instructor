import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveExperienceComponent } from './remove-experience.component';

describe('RemoveExperienceComponent', () => {
  let component: RemoveExperienceComponent;
  let fixture: ComponentFixture<RemoveExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RemoveExperienceComponent]
    });
    fixture = TestBed.createComponent(RemoveExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
