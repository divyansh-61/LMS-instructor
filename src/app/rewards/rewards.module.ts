import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RewardsRoutingModule } from './rewards-routing.module';

import { MaterialModule } from '../material/material.module';
import { RewardPointPageComponent } from './reward-point-page/reward-point-page.component';
import { RewardConvertConvertpointPopupComponent } from './reward-convert-convertpoint-popup/reward-convert-convertpoint-popup.component';
import { RewardConvertpopupComponent } from './reward-convertpopup/reward-convertpopup.component';


@NgModule({
  declarations: [
    RewardPointPageComponent,
    RewardConvertConvertpointPopupComponent,
    RewardConvertpopupComponent
  ],
  imports: [
    CommonModule,
    RewardsRoutingModule,
    MaterialModule
  ]
})
export class RewardsModule { }
