import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupFolderComponent } from './popup-folder.component';

describe('PopupFolderComponent', () => {
  let component: PopupFolderComponent;
  let fixture: ComponentFixture<PopupFolderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupFolderComponent]
    });
    fixture = TestBed.createComponent(PopupFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
