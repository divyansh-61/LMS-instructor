import { Component, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-change-chapter',
  templateUrl: './courses-change-chapter.component.html',
  styleUrls: ['./courses-change-chapter.component.css']
})
export class CoursesChangeChapterComponent {

  language = "English";
  selectedoption:any;
  onSave = new EventEmitter();

  constructor(public dialog: MatDialog) {}

  openPopup_new(): void {
    console.log(this.selectedoption);
    
    const dialogclose=this.dialog.closeAll()
  }
save(){
  this.onSave.emit(this.selectedoption);
  const dialogclose=this.dialog.closeAll()
}
}
