import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyReservationsComponent } from './my-reservations/my-reservations.component';
// import { RequestsComponent } from './requests/requests.component';
import { SettingsComponent } from './settings/settings.component';
import { RequestsComponent } from './requests/requests.component';
import { ActivateOfflineStatusToggleComponent } from './activate-offline-status-toggle/activate-offline-status-toggle.component';

const routes: Routes = [

  {
    path : '', redirectTo : 'my-reservation', pathMatch : 'full'
 },
  {
    path : 'my-reservation', component : MyReservationsComponent
  },
  {
    path : 'setting', component : SettingsComponent
  },
  {
    path : 'request', component : RequestsComponent
  },
  {
    path : 'activate', component : ActivateOfflineStatusToggleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MettingRoutingModule { }
