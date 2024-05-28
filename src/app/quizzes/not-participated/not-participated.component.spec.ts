import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotParticipatedComponent } from './not-participated.component';

describe('NotParticipatedComponent', () => {
  let component: NotParticipatedComponent;
  let fixture: ComponentFixture<NotParticipatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotParticipatedComponent]
    });
    fixture = TestBed.createComponent(NotParticipatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
