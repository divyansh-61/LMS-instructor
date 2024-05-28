import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationRemoveAccountComponent } from '../setting-education/education-remove-account/education-remove-account.component';

@Component({
  selector: 'app-setting-extra-info',
  templateUrl: './setting-extra-info.component.html',
  styleUrls: ['./setting-extra-info.component.css']
})
export class SettingExtraInfoComponent {

  select1 = "Select District"
  select2 = "Select City"
  select3 = "Select Province"
  select4 = "Select Country"

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
