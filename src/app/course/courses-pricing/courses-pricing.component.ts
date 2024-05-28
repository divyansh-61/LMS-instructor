import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-pricing',
  templateUrl: './courses-pricing.component.html',
  styleUrls: ['./courses-pricing.component.css']
})
export class CoursesPricingComponent {
  isShowNewPlan: boolean = false;

  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }
}
