import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssiComponent } from './my-assi.component';

describe('MyAssiComponent', () => {
  let component: MyAssiComponent;
  let fixture: ComponentFixture<MyAssiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyAssiComponent]
    });
    fixture = TestBed.createComponent(MyAssiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
