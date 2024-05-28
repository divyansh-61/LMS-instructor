import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargAcFinanComponent } from './charg-ac-finan.component';

describe('ChargAcFinanComponent', () => {
  let component: ChargAcFinanComponent;
  let fixture: ComponentFixture<ChargAcFinanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChargAcFinanComponent]
    });
    fixture = TestBed.createComponent(ChargAcFinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
