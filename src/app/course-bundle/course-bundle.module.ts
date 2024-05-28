import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseBundleRoutingModule } from './course-bundle-routing.module';
import { NewCourseBundleComponent } from './new-course-bundle/new-course-bundle.component';
import { StepprCourseBundleComponent } from './steppr-course-bundle/steppr-course-bundle.component';
import { ExtraInfoCourseBundleComponent } from './extra-info-course-bundle/extra-info-course-bundle.component';
import { MaterialModule } from '../material/material.module';
import { DeletePopupSteprComponent } from './delete-popup-stepr/delete-popup-stepr.component';
import { SucessDeletePopupSteprComponent } from './sucess-delete-popup-stepr/sucess-delete-popup-stepr.component';
import { PricingSteprCourseBunleComponent } from './pricing-stepr-course-bunle/pricing-stepr-course-bunle.component';
import { MessegeToReceverSteprCourseBundleComponent } from './messege-to-recever-stepr-course-bundle/messege-to-recever-stepr-course-bundle.component';
import { MyBundleCourseComponent } from './my-bundle-course/my-bundle-course.component';
import { DeletePopupMyBundleCourseComponent } from './delete-popup-my-bundle-course/delete-popup-my-bundle-course.component';
import { SucessDeletePopupMyBundleComponent } from './sucess-delete-popup-my-bundle/sucess-delete-popup-my-bundle.component';
import { ClickCoursepageMyBundleComponent } from './click-coursepage-my-bundle/click-coursepage-my-bundle.component';
import { ClickcourseDeletePopupMyBundleComponent } from './clickcourse-delete-popup-my-bundle/clickcourse-delete-popup-my-bundle.component';
import { ClickcourseSucessDeletePopupMyBundleComponent } from './clickcourse-sucess-delete-popup-my-bundle/clickcourse-sucess-delete-popup-my-bundle.component';
import { NewSteperComponent } from './new-steper/new-steper.component';
import { ContentComponent } from './content/content.component';
import { CoursebundleFAQComponent } from './coursebundle-faq/coursebundle-faq.component';


@NgModule({
  declarations: [
    NewCourseBundleComponent,
    StepprCourseBundleComponent,
    ExtraInfoCourseBundleComponent,
    DeletePopupSteprComponent,
    SucessDeletePopupSteprComponent,
    PricingSteprCourseBunleComponent,
    MessegeToReceverSteprCourseBundleComponent,
    MyBundleCourseComponent,
    DeletePopupMyBundleCourseComponent,
    SucessDeletePopupMyBundleComponent,
    ClickCoursepageMyBundleComponent,
    ClickcourseDeletePopupMyBundleComponent,
    ClickcourseSucessDeletePopupMyBundleComponent,
    NewSteperComponent,
    ContentComponent,
    CoursebundleFAQComponent,
      
  ],
  imports: [
    CommonModule,
    CourseBundleRoutingModule,
    MaterialModule
  
  ]
})
export class CourseBundleModule { }
