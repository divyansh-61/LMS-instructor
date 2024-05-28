import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-course-bundle',
  templateUrl: './new-course-bundle.component.html',
  styleUrls: ['./new-course-bundle.component.css']
})
export class NewCourseBundleComponent {
  public Editor = ClassicEditor;
}
