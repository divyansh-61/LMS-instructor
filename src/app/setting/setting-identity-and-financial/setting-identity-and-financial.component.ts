import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EducationRemoveAccountComponent } from '../setting-education/education-remove-account/education-remove-account.component';

@Component({
  selector: 'app-setting-identity-and-financial',
  templateUrl: './setting-identity-and-financial.component.html',
  styleUrls: ['./setting-identity-and-financial.component.css']
})
export class SettingIdentityAndFinancialComponent {
  constructor(public dialog:MatDialog){}

  DeleteAccount():void{

    const newref=this.dialog.open(EducationRemoveAccountComponent,{
      width: '40%'


    })
  }

  close():void{
    const close=this.dialog.closeAll();
  }

}
