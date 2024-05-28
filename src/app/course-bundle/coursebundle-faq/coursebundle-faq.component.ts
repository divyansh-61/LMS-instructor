import { Component } from '@angular/core';

@Component({
  selector: 'app-coursebundle-faq',
  templateUrl: './coursebundle-faq.component.html',
  styleUrls: ['./coursebundle-faq.component.css']
})
export class CoursebundleFAQComponent {
  panelOpenState = true;
  select: string = "Select a course";
}
