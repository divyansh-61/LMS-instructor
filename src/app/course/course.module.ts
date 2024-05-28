import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';


import { MaterialModule } from '../material/material.module';
import { CoursesComponent } from './courses/courses.component';
import { CoursesNewBasicInfoComponent } from './courses-new-basic-info/courses-new-basic-info.component';
import { CoursenewMessagetoreviewerComponent } from './coursenew-messagetoreviewer/coursenew-messagetoreviewer.component';
import { CoursenewQuizCertificationComponent } from './coursenew-quiz-certification/coursenew-quiz-certification.component';
import { CoursesFAQComponent } from './courses-faq/courses-faq.component';
import { CoursenewPrerequisitesComponent } from './coursenew-prerequisites/coursenew-prerequisites.component';
import { CoursesNewContentComponent } from './courses-new-content/courses-new-content.component';
import { CoursesPricingComponent } from './courses-pricing/courses-pricing.component';
import { CoursesExtraInfoComponent } from './courses-extra-info/courses-extra-info.component';
import { CoursesPricingButtonNewPlanComponent } from './courses-pricing-button-new-plan/courses-pricing-button-new-plan.component';
import { CoursesQuizAndCertificateButtonNewQuizComponent } from './courses-quiz-and-certificate-button-new-quiz/courses-quiz-and-certificate-button-new-quiz.component';
import { HistoryClickDeletePopupComponent } from './history-click-delete-popup/history-click-delete-popup.component';

import { CoursesItemsAddedSuccessComponent } from './courses-items-added-success/courses-items-added-success.component';
import { CoursesEditSectionComponent } from './courses-edit-section/courses-edit-section.component';
import { CoursesDeleteWithoutSuccessComponent } from './courses-delete-without-success/courses-delete-without-success.component';
import { CoursesChangeChapterComponent } from './courses-change-chapter/courses-change-chapter.component';
import { CoursesExtraInfoToggleButtonComponent } from './courses-extra-info-toggle-button/courses-extra-info-toggle-button.component';
import { DeleteSuccesComponent } from './delete-succes/delete-succes.component';
import { CourseMycourseComponent } from './course-mycourse/course-mycourse.component';
import { CoursesMycourseToggleButtonComponent } from './courses-mycourse-toggle-button/courses-mycourse-toggle-button.component';
import { CoursesMycourseCreateJoinLinkPopUpComponent } from './courses-mycourse-create-join-link-pop-up/courses-mycourse-create-join-link-pop-up.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CourseMyccReplyComponent } from './popup-folder/course-mycc-reply/course-mycc-reply.component';
import { CourseInvitedcourseComponent } from './course-invitedcourse/course-invitedcourse.component';
import { CourseOrganisationcoursesComponent } from './course-organisationcourses/course-organisationcourses.component';
import { CourseFavoritesComponent } from './course-favorites/course-favorites.component';
import { CourseMycommentsComponent } from './course-mycomments/course-mycomments.component';
import { CourseMypurchaseComponent } from './course-mypurchase/course-mypurchase.component';
import { CourseMycoursecomponentComponent } from './course-mycoursecomments/course-mycoursecomponent.component';
import { CourseInvitedCourseToggleComponent } from './course-invited-course-toggle/course-invited-course-toggle.component';
import { CourseStatisticsComponent } from './course-statistics/course-statistics.component';



@NgModule({
  declarations: [

    CoursesComponent,
    CoursesNewBasicInfoComponent,
    CoursenewMessagetoreviewerComponent,
    CoursenewQuizCertificationComponent,
    CoursesFAQComponent,
    CoursenewPrerequisitesComponent,
    CoursesNewContentComponent,
    CoursesPricingComponent,
    CoursesExtraInfoComponent,
    CoursesPricingButtonNewPlanComponent,
    CoursesQuizAndCertificateButtonNewQuizComponent,
    HistoryClickDeletePopupComponent,

    CoursesItemsAddedSuccessComponent,
    CoursesEditSectionComponent,
    CoursesDeleteWithoutSuccessComponent,
    CoursesChangeChapterComponent,
    CoursesExtraInfoToggleButtonComponent,
    DeleteSuccesComponent,
    CourseMycourseComponent,
    CoursesMycourseToggleButtonComponent,
    CoursesMycourseCreateJoinLinkPopUpComponent,

    CoursesEditComponent,
    CourseMyccReplyComponent,
    CourseInvitedcourseComponent,
    CourseOrganisationcoursesComponent,
    CourseFavoritesComponent,
    CourseMycommentsComponent,
    CourseMycoursecomponentComponent,
    CourseMypurchaseComponent,
    CoursenewMessagetoreviewerComponent,
    CourseInvitedCourseToggleComponent,

CourseStatisticsComponent




  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    MaterialModule
  ]
})
export class CourseModule { }
