import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-newbasicinformation',
  templateUrl: './newbasicinformation.component.html',
  styleUrls: ['./newbasicinformation.component.css']
})
export class NewbasicinformationComponent {
  title = 'angular';
  public Editor = ClassicEditor;

}
