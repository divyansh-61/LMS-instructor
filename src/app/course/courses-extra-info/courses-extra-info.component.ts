import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-extra-info',
  templateUrl: './courses-extra-info.component.html',
  styleUrls: ['./courses-extra-info.component.css']
})
export class CoursesExtraInfoComponent {
  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }
}
