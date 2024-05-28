import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-articlepage',
  templateUrl: './articlepage.component.html',
  styleUrls: ['./articlepage.component.css']
})
export class ArticlepageComponent {
  title = 'angular';
  public Editor = ClassicEditor;

}
