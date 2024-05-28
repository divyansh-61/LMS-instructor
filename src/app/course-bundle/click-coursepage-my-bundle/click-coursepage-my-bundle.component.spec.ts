import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCoursepageMyBundleComponent } from './click-coursepage-my-bundle.component';

describe('ClickCoursepageMyBundleComponent', () => {
  let component: ClickCoursepageMyBundleComponent;
  let fixture: ComponentFixture<ClickCoursepageMyBundleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClickCoursepageMyBundleComponent]
    });
    fixture = TestBed.createComponent(ClickCoursepageMyBundleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
