import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificateRoutingModule } from './certificate-routing.module';
import { CertificatesAchievementsComponent } from './certificates-achievements/certificates-achievements.component';
import { CertificateValidationComponent } from './certificate-validation/certificate-validation.component';
import { CompletionCertificatesComponent } from './completion-certificates/completion-certificates.component';
import { MaterialModule } from '../material/material.module';
import { CertificatesListComponent } from './certificates-list/certificates-list.component';


@NgModule({
  declarations: [
    CertificatesAchievementsComponent,
    CertificateValidationComponent,
  CompletionCertificatesComponent,
  CertificatesListComponent,
       
  ],
  imports: [
    CommonModule,
    CertificateRoutingModule,
    MaterialModule
  ]
})
export class CertificateModule { }
