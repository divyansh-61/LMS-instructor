import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AiContentComponent } from './ai-content/ai-content.component';

const routes: Routes = [
  {
    path:'',component:AiContentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AIRoutingModule { }
