import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewbasicinformationComponent } from './newbasicinformation.component';

describe('NewbasicinformationComponent', () => {
  let component: NewbasicinformationComponent;
  let fixture: ComponentFixture<NewbasicinformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewbasicinformationComponent]
    });
    fixture = TestBed.createComponent(NewbasicinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
