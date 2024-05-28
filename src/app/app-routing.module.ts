import { CourseModule } from './course/course.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path : 'login', component: LoginComponent
  },
  {
    path : 'home' , loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path : '' , loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : 'notification' , loadChildren: ()=> import('./notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path : 'setting' , loadChildren: ()=> import('./setting/setting.module').then(m => m.SettingModule)
  },
  {
    path : 'article' , loadChildren: ()=> import('./article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'course',
    loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
  },
  {
    path : 'rewards' , loadChildren: ()=> import('./rewards/rewards.module').then(m => m.RewardsModule)
  },
  {
    path : 'ai' , loadChildren: ()=> import('./ai/ai.module').then(m => m.AIModule)
  },
  {
    path : 'noticeboard' , loadChildren: ()=> import('./notice-board/notice-board.module').then(m => m.NoticeBoardModule)
  },
  {
    path : 'quizzes' , loadChildren: ()=> import('./quizzes/quizzes.module').then(m => m.QuizzesModule)
  },
  {
    path : 'store' , loadChildren: ()=> import('./store/store.module').then(m => m.StoreModule)
  },

  {

    path: 'assignment',
    loadChildren: () => import('./assignment/assignment.module').then(m => m.AssignmentModule)
  },
  {
    path: 'certificate',
    loadChildren: () => import('./certificate/certificate.module').then(m => m.CertificateModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule)
  },
  {
    path: 'upComingCourse',
    loadChildren: () => import('./up-coming-course/up-coming-course.module').then(m => m.UpComingCourseModule)
  },
  {
    path: 'CourseBundle',
    loadChildren: () => import('./course-bundle/course-bundle.module').then(m => m.CourseBundleModule)
  },
  {
    path: 'metting',
    loadChildren: () => import('./metting/metting.module').then(m => m.MettingModule)
  },
  {
    path: 'Support',
    loadChildren: () => import('./support/support.module').then(m => m.SupportModule)
  },
  {
    path: 'Marketing',
    loadChildren: () => import('./marketing/marketing.module').then(m => m.MarketingModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
