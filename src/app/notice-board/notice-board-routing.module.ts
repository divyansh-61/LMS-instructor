import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { HistoryClickEditComponent } from './history-click-edit/history-click-edit.component';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { CourseNoticeComponent } from './course-notice/course-notice.component';
import { NewcourseNoticeComponent } from './newcourse-notice/newcourse-notice.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'history', pathMatch : 'full'
 },
  {
    path:'history', component:HistoryComponent
  },
  {
    path:'historyEdit', component:HistoryClickEditComponent
  },
  {
    path:'new-notice', component:NewNoticeComponent
  },
  {
    path:'course-notice', component:CourseNoticeComponent
  },
  {
    path:'new-course-notice', component:NewcourseNoticeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoticeBoardRoutingModule { }
