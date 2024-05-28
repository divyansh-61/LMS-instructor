import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationRemoveItemComponent } from './education-remove-item.component';

describe('EducationRemoveItemComponent', () => {
  let component: EducationRemoveItemComponent;
  let fixture: ComponentFixture<EducationRemoveItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationRemoveItemComponent]
    });
    fixture = TestBed.createComponent(EducationRemoveItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
