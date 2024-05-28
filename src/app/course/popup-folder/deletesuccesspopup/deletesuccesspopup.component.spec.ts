import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletesuccesspopupComponent } from './deletesuccesspopup.component';

describe('DeletesuccesspopupComponent', () => {
  let component: DeletesuccesspopupComponent;
  let fixture: ComponentFixture<DeletesuccesspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeletesuccesspopupComponent]
    });
    fixture = TestBed.createComponent(DeletesuccesspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
