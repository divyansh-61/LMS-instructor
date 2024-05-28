import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-upcoming',
  templateUrl: './new-upcoming.component.html',
  styleUrls: ['./new-upcoming.component.css']
})
export class NewUpcomingComponent {
  public Editor = ClassicEditor;
}
