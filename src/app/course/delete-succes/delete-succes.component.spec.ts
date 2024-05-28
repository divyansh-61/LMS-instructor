import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSuccesComponent } from './delete-succes.component';

describe('DeleteSuccesComponent', () => {
  let component: DeleteSuccesComponent;
  let fixture: ComponentFixture<DeleteSuccesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteSuccesComponent]
    });
    fixture = TestBed.createComponent(DeleteSuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
