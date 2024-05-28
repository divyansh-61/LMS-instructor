import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-experience',
  templateUrl: './remove-experience.component.html',
  styleUrls: ['./remove-experience.component.css']
})
export class RemoveExperienceComponent {
  constructor(public dialog:MatDialog){}

  ItemRemovedPopup(){
    
  }

}
