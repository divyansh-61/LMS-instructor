import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-notice',
  templateUrl: './new-notice.component.html',
  styleUrls: ['./new-notice.component.css']
})
export class NewNoticeComponent {
  selected2="Hindi"
  public Editor = ClassicEditor;
}
