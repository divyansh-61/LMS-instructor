import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtrainfotoggleComponent } from './extrainfotoggle.component';

describe('ExtrainfotoggleComponent', () => {
  let component: ExtrainfotoggleComponent;
  let fixture: ComponentFixture<ExtrainfotoggleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtrainfotoggleComponent]
    });
    fixture = TestBed.createComponent(ExtrainfotoggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
