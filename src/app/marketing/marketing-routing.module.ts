import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffiliateComponent } from './affiliate/affiliate.component';
import { DiscontMarketingComponent } from './discont-marketing/discont-marketing.component';
import { PromotionsMarketingComponent } from './promotions-marketing/promotions-marketing.component';
import { RegistrationBonusComponent } from './registration-bonus/registration-bonus.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'discount', pathMatch: 'full'
  },
  {
    path: 'affilate', component: AffiliateComponent
  },
  {
    path: 'discount', component: DiscontMarketingComponent
  },
  {
    path: 'promotion', component: PromotionsMarketingComponent
  },
  {
    path: 'registration-bonus', component: RegistrationBonusComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
