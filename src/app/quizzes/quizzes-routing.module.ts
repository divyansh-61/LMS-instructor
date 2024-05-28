import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ResultsComponent } from './results/results.component';
import { EditlistComponent } from './editlist/editlist.component';
import { ResultlistclicktoggleComponent } from './resultlistclicktoggle/resultlistclicktoggle.component';
import { ResultreviewComponent } from './resultreview/resultreview.component';
import { MyresultComponent } from './myresult/myresult.component';
import { NotParticipatedComponent } from './not-participated/not-participated.component';




const routes: Routes = [
  {
    path : '', redirectTo : 'new', pathMatch : 'full'
 },
  {
    path:'new',component:NewComponent
  },
  {
    path:'list',component:ListComponent
  },
  {
    path:'results',component:ResultsComponent
  },
  {
    path:'edit',component:EditlistComponent
  },
  {
    path:'resulttoggle',component:ResultlistclicktoggleComponent
  },
  {
    path:'resultreview',component:ResultreviewComponent
  },
  {
    path:"myresult",component:MyresultComponent
  },
  {
    path:"notparticipated",component:NotParticipatedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzesRoutingModule { }
