import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { ForumBookmarkComponent } from './forum-bookmark/forum-bookmark.component';
import { ForumMyPostComponent } from './forum-my-post/forum-my-post.component';
import { ForumMyTopicComponent } from './forum-my-topic/forum-my-topic.component';
import { ForumNewTopicComponent } from './forum-new-topic/forum-new-topic.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ForumBookmarkComponent,
    ForumMyPostComponent,
    ForumMyTopicComponent,
    ForumNewTopicComponent
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    MaterialModule
  ]
})
export class ForumModule { }
