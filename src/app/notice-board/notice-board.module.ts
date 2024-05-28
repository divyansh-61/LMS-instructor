import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeBoardRoutingModule } from './notice-board-routing.module';
import { HistoryComponent } from './history/history.component';
import { HistoryClickViewComponent } from './history-click-view/history-click-view.component';
import { HistoryClickEditComponent } from './history-click-edit/history-click-edit.component';
import { HistoryClickDeletePopupComponent } from './history-click-delete-popup/history-click-delete-popup.component';
import { HistoryClickDeleteSuccesPopupComponent } from './history-click-delete-succes-popup/history-click-delete-succes-popup.component';
import { NewNoticeComponent } from './new-notice/new-notice.component';
import { CourseNoticeComponent } from './course-notice/course-notice.component';
import { NewcourseNoticeComponent } from './newcourse-notice/newcourse-notice.component';
import { MaterialModule } from '../material/material.module';
import { SendNoticePopupComponent } from './send-notice-popup/send-notice-popup.component';



@NgModule({
  declarations: [
    HistoryComponent,
    HistoryClickViewComponent,
    HistoryClickEditComponent,
    HistoryClickDeletePopupComponent,
    HistoryClickDeleteSuccesPopupComponent,
    NewNoticeComponent,
    CourseNoticeComponent,
    NewcourseNoticeComponent,
    SendNoticePopupComponent,
    
  ],
  imports: [
    CommonModule,
    NoticeBoardRoutingModule,
    MaterialModule
  ]
})
export class NoticeBoardModule { }
