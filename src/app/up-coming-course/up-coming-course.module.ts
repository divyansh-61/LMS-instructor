import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpComingCourseRoutingModule } from './up-coming-course-routing.module';
import { ClickViewFollowersComponent } from './click-view-followers/click-view-followers.component';
import { ConformdeleteComponent } from './conformdelete/conformdelete.component';
import { ExtrainformationComponent } from './extrainformation/extrainformation.component';
import { FaqComponent } from './faq/faq.component';
import { FollowingCoursesComponent } from './following-courses/following-courses.component';
import { MainSettingPageComponent } from './main-setting-page/main-setting-page.component';
import { MassageToReviewerComponent } from './massage-to-reviewer/massage-to-reviewer.component';
import { MyupcomingcoursesComponent } from './myupcomingcourses/myupcomingcourses.component';
// import { NewComponent } from '../support/new/new.component';
import { NewdeleteComponent } from './newdelete/newdelete.component';
import { PopupMarkAsReleasedComponent } from './popup-mark-as-released/popup-mark-as-released.component';
import { SavePopupComponent } from './save-popup/save-popup.component';
import { ToggleMyupcomingcoursesComponent } from './toggle-myupcomingcourses/toggle-myupcomingcourses.component';
import { MaterialModule } from '../material/material.module';
import { NewUpcomingComponent } from './new-upcoming/new-upcoming.component';
import { NewSteperUpcomeComponent } from './new-steper-upcome/new-steper-upcome.component';

@NgModule({
  declarations: [
    ClickViewFollowersComponent,
    ConformdeleteComponent,
    ExtrainformationComponent,
    FaqComponent,
    FollowingCoursesComponent,
    MainSettingPageComponent,
    MassageToReviewerComponent,
    MyupcomingcoursesComponent,
    NewUpcomingComponent,
    NewdeleteComponent,
    PopupMarkAsReleasedComponent,
    SavePopupComponent,
    ToggleMyupcomingcoursesComponent,
    NewSteperUpcomeComponent
  ],
  imports: [
    CommonModule,
    UpComingCourseRoutingModule,
    MaterialModule
  ]
})
export class UpComingCourseModule { }
