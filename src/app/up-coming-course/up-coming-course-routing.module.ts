import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUpcomingComponent } from './new-upcoming/new-upcoming.component';
import { MainSettingPageComponent } from './main-setting-page/main-setting-page.component';
import { MyupcomingcoursesComponent } from './myupcomingcourses/myupcomingcourses.component';
import { FollowingCoursesComponent } from './following-courses/following-courses.component';
// import { NewSteperUpcomeComponent } from './new-steper-upcome/new-steper-upcome.component';
import { ClickViewFollowersComponent } from './click-view-followers/click-view-followers.component';
import { ToggleMyupcomingcoursesComponent } from './toggle-myupcomingcourses/toggle-myupcomingcourses.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new', pathMatch : 'full'
 },
  {
    path:'new-upcoming', component:NewUpcomingComponent
  },
  {
    path:'new', component:MainSettingPageComponent
  },
  {
    path:'my-upcoming-course', component:MyupcomingcoursesComponent
  },
  {
    path:'following-course', component:FollowingCoursesComponent
  },
  // {
  //   path:'edit', component:MainSettingPageComponent
  // },
  {
    path:'app-click-view-followers', component:ClickViewFollowersComponent
    },
    {
      path:'app-toggle-myupcomingcourses', component: ToggleMyupcomingcoursesComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpComingCourseRoutingModule { }
