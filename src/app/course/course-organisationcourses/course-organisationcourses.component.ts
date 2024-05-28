import { Component } from '@angular/core';
import { SlidinganimateCourseComponent } from '../slidinganimate-course/slidinganimate-course.component';
import { slideRightAnimation } from '../slidinganimate-course/slidinganimate-course.component';
@Component({
  selector: 'app-course-organisationcourses',
  templateUrl: './course-organisationcourses.component.html',
  styleUrls: ['./course-organisationcourses.component.css'],
  animations: [slideRightAnimation],
})
export class CourseOrganisationcoursesComponent {
  selected="All";
  selected1="All";
  selected2="All";

  isCardVisible = false;

  toggleCard() {
    this.isCardVisible = !this.isCardVisible;
  }

  secondcardvisible=true;

  offcard(){
    this.secondcardvisible=!this.secondcardvisible;
  }

}
