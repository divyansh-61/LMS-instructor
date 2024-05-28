import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqSucessComponent } from './req-sucess.component';

describe('ReqSucessComponent', () => {
  let component: ReqSucessComponent;
  let fixture: ComponentFixture<ReqSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReqSucessComponent]
    });
    fixture = TestBed.createComponent(ReqSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
