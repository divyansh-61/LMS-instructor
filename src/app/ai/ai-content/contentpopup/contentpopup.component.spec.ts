import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentpopupComponent } from './contentpopup.component';

describe('ContentpopupComponent', () => {
  let component: ContentpopupComponent;
  let fixture: ComponentFixture<ContentpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentpopupComponent]
    });
    fixture = TestBed.createComponent(ContentpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
