import { Component } from '@angular/core';

@Component({
  selector: 'app-course-invitedcourse',
  templateUrl: './course-invitedcourse.component.html',
  styleUrls: ['./course-invitedcourse.component.css']
})
export class CourseInvitedcourseComponent {
  selected="All";
  selected1="All";
  selected2="All";

  isShowNewPlan: boolean = false;
  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
