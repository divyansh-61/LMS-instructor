import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { MaterialModule } from '../material/material.module';
import { PopupComponent } from './popup/popup.component';
import { ViewpopupComponent } from './viewpopup/viewpopup.component';
import { YespopupComponent } from './yespopup/yespopup.component';


@NgModule({
  declarations: [
    NotificationComponent,
    PopupComponent,
    ViewpopupComponent,
    YespopupComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule
  ]
})
export class NotificationModule { }
