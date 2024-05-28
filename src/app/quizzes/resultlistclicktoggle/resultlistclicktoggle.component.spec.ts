import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultlistclicktoggleComponent } from './resultlistclicktoggle.component';

describe('ResultlistclicktoggleComponent', () => {
  let component: ResultlistclicktoggleComponent;
  let fixture: ComponentFixture<ResultlistclicktoggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultlistclicktoggleComponent]
    });
    fixture = TestBed.createComponent(ResultlistclicktoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
