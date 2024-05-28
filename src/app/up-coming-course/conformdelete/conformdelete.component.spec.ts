import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformdeleteComponent } from './conformdelete.component';

describe('ConformdeleteComponent', () => {
  let component: ConformdeleteComponent;
  let fixture: ComponentFixture<ConformdeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConformdeleteComponent]
    });
    fixture = TestBed.createComponent(ConformdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
