import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CourseMycourseComponent } from './course-mycourse/course-mycourse.component';
import { CoursesEditComponent } from './courses-edit/courses-edit.component';
import { CourseMycoursecomponentComponent } from './course-mycoursecomments/course-mycoursecomponent.component';
import { CourseMypurchaseComponent } from './course-mypurchase/course-mypurchase.component';
import { CourseMycommentsComponent } from './course-mycomments/course-mycomments.component';
import { CourseFavoritesComponent } from './course-favorites/course-favorites.component';
import { CourseOrganisationcoursesComponent } from './course-organisationcourses/course-organisationcourses.component';
import { CourseInvitedcourseComponent } from './course-invitedcourse/course-invitedcourse.component';
import { CourseInvitedCourseToggleComponent } from './course-invited-course-toggle/course-invited-course-toggle.component';
import { CourseStatisticsComponent } from './course-statistics/course-statistics.component';



const routes: Routes = [
  {
    path : '', redirectTo : 'new', pathMatch : 'full'
 },

  {
    path: 'new', component: CoursesComponent
  },
  {
    path: 'my-cousrse', component:CourseMycourseComponent
  },
  // {
  //   path: 'edit', component: CoursesEditComponent
  // },
  {
    path:"course-invitedcourse" , component: CourseInvitedcourseComponent,

  },
  {
    path:"course-invited-toggle" , component: CourseInvitedCourseToggleComponent,

  },
  {
    path:"course-organisationcourse" , component: CourseOrganisationcoursesComponent,

  },
  {
    path:"statistic" , component: CourseStatisticsComponent,

  },
  {
    path:"course-favourites" , component: CourseFavoritesComponent,

  },
  {
    path:"course-Mycomments" , component: CourseMycommentsComponent,

  },
  // my course comments route path
  {
    path:"course-Mycoursecomments" , component: CourseMycoursecomponentComponent,

  },
  {
    path:"course-Mypurchase" , component: CourseMypurchaseComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
