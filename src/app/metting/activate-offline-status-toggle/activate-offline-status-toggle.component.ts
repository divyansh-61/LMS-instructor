import { Component } from '@angular/core';

@Component({
  selector: 'app-activate-offline-status-toggle',
  templateUrl: './activate-offline-status-toggle.component.html',
  styleUrls: ['./activate-offline-status-toggle.component.css']
})
export class ActivateOfflineStatusToggleComponent {
  isChecked = true;


  isShowNewPlan: boolean = false;
  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }


}
