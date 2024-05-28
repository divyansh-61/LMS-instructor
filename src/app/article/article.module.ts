import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { MyArticleComponent } from './my-article/my-article.component';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import { MaterialModule } from '../material/material.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';



@NgModule({
  declarations: [
    MyArticleComponent,
    ArticleCommentsComponent,
    ArticlepageComponent
  ],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    MaterialModule,
    CKEditorModule
  ]
})
export class ArticleModule { }
