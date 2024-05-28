import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrainformationComponent } from './extrainformation.component';

describe('ExtrainformationComponent', () => {
  let component: ExtrainformationComponent;
  let fixture: ComponentFixture<ExtrainformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtrainformationComponent]
    });
    fixture = TestBed.createComponent(ExtrainformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
