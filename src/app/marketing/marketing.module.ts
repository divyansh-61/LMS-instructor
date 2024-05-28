import { RegistrationBonusComponent } from './registration-bonus/registration-bonus.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketingRoutingModule } from './marketing-routing.module';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { MaterialModule } from '../material/material.module';
import { DiscontMarketingComponent } from './discont-marketing/discont-marketing.component';
import { PromotionsMarketingComponent } from './promotions-marketing/promotions-marketing.component';



@NgModule({
  declarations: [
    AffiliateComponent,
    DiscontMarketingComponent,
    PromotionsMarketingComponent,
  RegistrationBonusComponent

  ],
  imports: [
    CommonModule,
    MarketingRoutingModule,
    MaterialModule
  ]
})
export class MarketingModule { }
