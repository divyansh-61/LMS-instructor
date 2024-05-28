import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizzesRoutingModule } from './quizzes-routing.module';
import { QuizzesComponent } from './quizzes/quizzes.component';

import { ListComponent } from './list/list.component';
import { ResultsComponent } from './results/results.component';
import { MaterialModule } from '../material/material.module';
import { EditlistComponent } from './editlist/editlist.component';
import { ListmultiplepopupComponent } from './listmultiplepopup/listmultiplepopup.component';
import { ListclickdeletepopupComponent } from './listclickdeletepopup/listclickdeletepopup.component';
import { NewComponent } from './new/new.component';
import { ListAddDiscriptionPopupComponent } from './list-add-discription-popup/list-add-discription-popup.component';
import { ListdeletesuccesspopupComponent } from './listdeletesuccesspopup/listdeletesuccesspopup.component';
import { ListeditsavepopupComponent } from './listeditsavepopup/listeditsavepopup.component';
import { ResultlistclicktoggleComponent } from './resultlistclicktoggle/resultlistclicktoggle.component';
import { ResultreviewComponent } from './resultreview/resultreview.component';
import { MyresultComponent } from './myresult/myresult.component';
import { NotParticipatedComponent } from './not-participated/not-participated.component';



@NgModule({
  declarations: [
    QuizzesComponent,
    NewComponent,
    ListComponent,
    ResultsComponent,
    EditlistComponent,
    ListmultiplepopupComponent,
    ListclickdeletepopupComponent,
    ListclickdeletepopupComponent,
    ListAddDiscriptionPopupComponent,
    ListdeletesuccesspopupComponent,
    ListeditsavepopupComponent,
    ResultlistclicktoggleComponent,
    ResultreviewComponent,
    MyresultComponent,
    NotParticipatedComponent,
 
  ],
  imports: [
    CommonModule,
    QuizzesRoutingModule,
    MaterialModule
  ]
})
export class QuizzesModule { }
