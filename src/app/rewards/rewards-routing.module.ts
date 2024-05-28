import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardPointPageComponent } from './reward-point-page/reward-point-page.component';

// import { RewardComponent } from './reward/reward.component';
// import { RewardsModule } from './rewards.module';

const routes: Routes = [
  {
    path:'',component:RewardPointPageComponent
  },
  // {
  //   path:'/rewards',component:RewardComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RewardsRoutingModule { }
