import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyupcomingcoursesComponent } from './myupcomingcourses.component';

describe('MyupcomingcoursesComponent', () => {
  let component: MyupcomingcoursesComponent;
  let fixture: ComponentFixture<MyupcomingcoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyupcomingcoursesComponent]
    });
    fixture = TestBed.createComponent(MyupcomingcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
