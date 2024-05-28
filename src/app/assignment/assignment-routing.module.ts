import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStudentAssiComponent } from './all-student-assi/all-student-assi.component';
import { MyAssiComponent } from './my-assi/my-assi.component';
import { StudentAssiComponent } from './student-assi/student-assi.component';
import { PendingReviewStudentAssiComponent } from './pending-review-student-assi/pending-review-student-assi.component';


const routes: Routes = [
  {
    path : '', redirectTo : 'my-assi', pathMatch : 'full'
 },
  {path:'all-assign',component:AllStudentAssiComponent},
  {path:'my-assi',component:MyAssiComponent},
  {path:'student-assi',component:StudentAssiComponent},
  {path:'pending-assi',component:PendingReviewStudentAssiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
