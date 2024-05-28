import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-myupcomingcourses',
  templateUrl: './toggle-myupcomingcourses.component.html',
  styleUrls: ['./toggle-myupcomingcourses.component.css']
})
export class ToggleMyupcomingcoursesComponent {
  isChecked = true;


  isShowNewPlan: boolean = false;
  toggleNewPlan(){
    this.isShowNewPlan = !this.isShowNewPlan
  }


}
