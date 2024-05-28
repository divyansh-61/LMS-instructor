import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickViewFollowersComponent } from './click-view-followers.component';

describe('ClickViewFollowersComponent', () => {
  let component: ClickViewFollowersComponent;
  let fixture: ComponentFixture<ClickViewFollowersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickViewFollowersComponent]
    });
    fixture = TestBed.createComponent(ClickViewFollowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
