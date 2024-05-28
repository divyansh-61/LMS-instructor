import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyArticleComponent } from './my-article/my-article.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new-article', pathMatch : 'full'
 },
  {
    path:"new-article" , component: ArticlepageComponent,

  },
  {
    path:"my-articles" , component: MyArticleComponent,


  },
  {
    path:"comments" , component: ArticleCommentsComponent,


  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
