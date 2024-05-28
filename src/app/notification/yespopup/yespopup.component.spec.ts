import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YespopupComponent } from './yespopup.component';

describe('YespopupComponent', () => {
  let component: YespopupComponent;
  let fixture: ComponentFixture<YespopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YespopupComponent]
    });
    fixture = TestBed.createComponent(YespopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
