import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumBookmarkComponent } from './forum-bookmark/forum-bookmark.component';
import { ForumMyPostComponent } from './forum-my-post/forum-my-post.component';
import { ForumMyTopicComponent } from './forum-my-topic/forum-my-topic.component';
import { ForumNewTopicComponent } from './forum-new-topic/forum-new-topic.component';

const routes: Routes = [
  {
    path : '', redirectTo : 'new-topic', pathMatch : 'full'
 },
  {
    path:'bookmark', component:ForumBookmarkComponent
  },
  {
    path:'my-post', component:ForumMyPostComponent
  },
  {
    path:'my-topic', component:ForumMyTopicComponent
  },
  {
    path:'new-topic', component:ForumNewTopicComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
