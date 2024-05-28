import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { ChargAcFinanComponent } from './charg-ac-finan/charg-ac-finan.component';
import { InstallmentFinanComponent } from './installment-finan/installment-finan.component';
import { PayoutFinanComponent } from './payout-finan/payout-finan.component';
import { PayoutPopupFinanComponent } from './payout-popup-finan/payout-popup-finan.component';
import { SaasFinanComponent } from './saas-finan/saas-finan.component';
import { SalesReportFinanComponent } from './sales-report-finan/sales-report-finan.component';
import { SubscribeFinanComponent } from './subscribe-finan/subscribe-finan.component';
import { SummaryFinanComponent } from './summary-finan/summary-finan.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ChargAcFinanComponent,
    InstallmentFinanComponent,
    PayoutFinanComponent,
    PayoutPopupFinanComponent,
    SaasFinanComponent,
    SalesReportFinanComponent,
    SubscribeFinanComponent,
    SummaryFinanComponent,
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    MaterialModule

  ]
})
export class FinancialModule { }
