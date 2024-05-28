import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUpcomingComponent } from './new-upcoming.component';

describe('NewUpcomingComponent', () => {
  let component: NewUpcomingComponent;
  let fixture: ComponentFixture<NewUpcomingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewUpcomingComponent]
    });
    fixture = TestBed.createComponent(NewUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
