import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-newcourse-notice',
  templateUrl: './newcourse-notice.component.html',
  styleUrls: ['./newcourse-notice.component.css']
})
export class NewcourseNoticeComponent {
  selected1="Hindi"
  selected2="Hindi"
  public Editor = ClassicEditor;
}
