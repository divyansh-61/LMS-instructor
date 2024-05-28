import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeletePopupMyBundleCourseComponent } from '../delete-popup-my-bundle-course/delete-popup-my-bundle-course.component';
import { StepprCourseBundleComponent } from '../steppr-course-bundle/steppr-course-bundle.component';

@Component({
  selector: 'app-my-bundle-course',
  templateUrl: './my-bundle-course.component.html',
  styleUrls: ['./my-bundle-course.component.css']
})
export class MyBundleCourseComponent {
  constructor(public dialog:MatDialog){}

 


  delete(): void {
    const dialogRef = this.dialog.open(DeletePopupMyBundleCourseComponent, {
      width: '40%',
      // Set the desired width
      data: {},
    });
  }

  
 
}
