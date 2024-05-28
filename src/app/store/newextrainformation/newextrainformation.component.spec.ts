import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewextrainformationComponent } from './newextrainformation.component';

describe('NewextrainformationComponent', () => {
  let component: NewextrainformationComponent;
  let fixture: ComponentFixture<NewextrainformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewextrainformationComponent]
    });
    fixture = TestBed.createComponent(NewextrainformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
