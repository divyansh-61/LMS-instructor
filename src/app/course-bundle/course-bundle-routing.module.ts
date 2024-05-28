import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepprCourseBundleComponent } from './steppr-course-bundle/steppr-course-bundle.component';
import { MyBundleCourseComponent } from './my-bundle-course/my-bundle-course.component';
import { ClickCoursepageMyBundleComponent } from './click-coursepage-my-bundle/click-coursepage-my-bundle.component';
// import { NewSteperComponent } from './new-steper/new-steper.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new', pathMatch : 'full'
 },
  {
    path:'new', component:StepprCourseBundleComponent
  },
  {
    path:'my-bundle', component:MyBundleCourseComponent
  },
  {
    path:'click-course', component:ClickCoursepageMyBundleComponent
  },
  // {
  //   path:'edit', component:StepprCourseBundleComponent
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseBundleRoutingModule { }
