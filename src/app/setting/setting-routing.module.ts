import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingStepperComponent } from './setting-stepper/setting-stepper.component';

const routes: Routes = [
  {
    path:'', component: SettingStepperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
