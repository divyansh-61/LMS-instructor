import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MettingRoutingModule } from './metting-routing.module';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
import { MaterialModule } from '../material/material.module';
import { RequestsComponent } from './requests/requests.component';
import { SettingsComponent } from './settings/settings.component';
import { NewdeleteComponent } from '../up-coming-course/newdelete/newdelete.component';
import { ClearAllPopupComponent } from './clear-all-popup/clear-all-popup.component';
import { AddtimePopupComponent } from './addtime-popup/addtime-popup.component';
import { ContactStudentPopupComponent } from './contact-student-popup/contact-student-popup.component';
import { ActivateOfflineStatusToggleComponent } from './activate-offline-status-toggle/activate-offline-status-toggle.component';
import { FinishMeetingtPopupComponent } from './finish-meetingt-popup/finish-meetingt-popup.component';


@NgModule({
  declarations: [

    MyReservationsComponent,
    RequestsComponent,
    SettingsComponent,
    ClearAllPopupComponent,
    AddtimePopupComponent,
    ContactStudentPopupComponent,
    ActivateOfflineStatusToggleComponent,
    FinishMeetingtPopupComponent
  ],
  imports: [
    CommonModule,
    MettingRoutingModule,
    MaterialModule
  ]
})
export class MettingModule { }
