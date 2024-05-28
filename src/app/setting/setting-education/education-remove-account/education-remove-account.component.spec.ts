import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationRemoveAccountComponent } from './education-remove-account.component';

describe('EducationRemoveAccountComponent', () => {
  let component: EducationRemoveAccountComponent;
  let fixture: ComponentFixture<EducationRemoveAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EducationRemoveAccountComponent]
    });
    fixture = TestBed.createComponent(EducationRemoveAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
