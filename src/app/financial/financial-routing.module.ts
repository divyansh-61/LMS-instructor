import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SummaryFinanComponent } from './summary-finan/summary-finan.component';
import { PayoutFinanComponent } from './payout-finan/payout-finan.component';
import { ChargAcFinanComponent } from './charg-ac-finan/charg-ac-finan.component';
import { SubscribeFinanComponent } from './subscribe-finan/subscribe-finan.component';
import { InstallmentFinanComponent } from './installment-finan/installment-finan.component';
import { SaasFinanComponent } from './saas-finan/saas-finan.component';
import { SalesReportFinanComponent } from './sales-report-finan/sales-report-finan.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'sales-Report', pathMatch : 'full'
 },
  {
    path:'summary' ,component:SummaryFinanComponent
  },
  {
    path:'payout' ,component:PayoutFinanComponent
  },
  {
    path:'charg-account' ,component:ChargAcFinanComponent
  },
  {
    path:'subscribe' ,component:SubscribeFinanComponent
  },
  {
    path:'installment' ,component:InstallmentFinanComponent
  },
  {
    path:'saas' ,component:SaasFinanComponent
  },
  {
    path:'sales-Report' ,component:SalesReportFinanComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
