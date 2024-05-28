import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentRoutingModule } from './assignment-routing.module';

import { MaterialModule } from '../material/material.module';
import { AllStudentAssiComponent } from './all-student-assi/all-student-assi.component';
import { MyAssiComponent } from './my-assi/my-assi.component';
import { PendingReviewStudentAssiComponent } from './pending-review-student-assi/pending-review-student-assi.component';
import { StudentAssiComponent } from './student-assi/student-assi.component';



@NgModule({
  declarations: [
    AllStudentAssiComponent,
    MyAssiComponent,
    PendingReviewStudentAssiComponent,
    StudentAssiComponent,
    
  ],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    MaterialModule
  ]
})
export class AssignmentModule { }
