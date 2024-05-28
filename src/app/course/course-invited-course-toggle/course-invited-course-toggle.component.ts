import { Component } from '@angular/core';

@Component({
  selector: 'app-course-invited-course-toggle',
  templateUrl: './course-invited-course-toggle.component.html',
  styleUrls: ['./course-invited-course-toggle.component.css']
})
export class CourseInvitedCourseToggleComponent {
  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }
}
