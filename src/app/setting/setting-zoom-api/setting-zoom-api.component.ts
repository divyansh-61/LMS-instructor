import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationRemoveAccountComponent } from '../setting-education/education-remove-account/education-remove-account.component';

@Component({
  selector: 'app-setting-zoom-api',
  templateUrl: './setting-zoom-api.component.html',
  styleUrls: ['./setting-zoom-api.component.css']
})
export class SettingZoomApiComponent {
  constructor(public dialog: MatDialog) { }

  DeleteAccount(): void {

    const newref = this.dialog.open(EducationRemoveAccountComponent, {
      width: '40%'


    })
  }

  close(): void {
    const close = this.dialog.closeAll();
  }
}
