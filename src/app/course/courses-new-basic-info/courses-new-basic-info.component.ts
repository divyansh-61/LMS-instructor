import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-courses-new-basic-info',
  templateUrl: './courses-new-basic-info.component.html',
  styleUrls: ['./courses-new-basic-info.component.css']
})
export class CoursesNewBasicInfoComponent {
  public Editor = ClassicEditor;
}
