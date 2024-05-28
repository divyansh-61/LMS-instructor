import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesChangeChapterComponent } from '../courses-change-chapter/courses-change-chapter.component';
import { CoursesDeleteWithoutSuccessComponent } from '../courses-delete-without-success/courses-delete-without-success.component';
import { CoursesItemsAddedSuccessComponent } from '../courses-items-added-success/courses-items-added-success.component';
import { CoursesEditSectionComponent } from '../courses-edit-section/courses-edit-section.component';


@Component({
  selector: 'app-courses-new-content',
  templateUrl: './courses-new-content.component.html',
  styleUrls: ['./courses-new-content.component.css']
})
export class CoursesNewContentComponent {
  language = "English";
  section1:any
  source1 = "Upload";
  filetype1 = "Video";
  primary = "primary";

  panelOpenState = false;

  constructor(public dialog: MatDialog) {}

  
  // openPopup_new(): void {
  //   const dialogclose=this.dialog.closeAll()
  //   this.sucesspopup()
  // }
  // openPopup_new2(): void {
  //   const dialogclose=this.dialog.closeAll()
   
  // }

  sectionpopup():void{
    const newref=this.dialog.open(CoursesChangeChapterComponent,{
      width: '40%'
    })

    newref.componentInstance.onSave.subscribe(data=> {
      console.log(data);
      this.section1 = data
      
    })
  }

  deletepopup():void{

    const newref=this.dialog.open(CoursesDeleteWithoutSuccessComponent,{
      width: '40%'
    })
  }

  itemAddedSuccessfullyPopUp():void{

    const newref=this.dialog.open(CoursesItemsAddedSuccessComponent,{
      width: '40%'
    })
  }

  editpopup():void{

    const newref=this.dialog.open(CoursesEditSectionComponent,{
      width: '40%'
    })
  }
  
}