import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-extra-info-toggle-button',
  templateUrl: './courses-extra-info-toggle-button.component.html',
  styleUrls: ['./courses-extra-info-toggle-button.component.css'],
})
export class CoursesExtraInfoToggleButtonComponent {
  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan;
  }
}
