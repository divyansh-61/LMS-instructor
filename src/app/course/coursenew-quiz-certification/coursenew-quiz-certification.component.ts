import { Component } from '@angular/core';

@Component({
  selector: 'app-coursenew-quiz-certification',
  templateUrl: './coursenew-quiz-certification.component.html',
  styleUrls: ['./coursenew-quiz-certification.component.css']
})
export class CoursenewQuizCertificationComponent {
  isShowNewPlan: boolean = false;

  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }
}
