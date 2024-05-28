import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyresultComponent } from './myresult.component';

describe('MyresultComponent', () => {
  let component: MyresultComponent;
  let fixture: ComponentFixture<MyresultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyresultComponent]
    });
    fixture = TestBed.createComponent(MyresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
