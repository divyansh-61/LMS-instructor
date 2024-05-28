import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-newextrainformation',
  templateUrl: './newextrainformation.component.html',
  styleUrls: ['./newextrainformation.component.css']
})
export class NewextrainformationComponent {
  selected = "All";
  selected1 = "All";
  selected2 = "All";


  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
