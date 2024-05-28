import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DeletePopupSteprComponent } from '../delete-popup-stepr/delete-popup-stepr.component';


@Component({
  selector: 'app-new-steper',
  templateUrl: './new-steper.component.html',
  styleUrls: ['./new-steper.component.css']
})
export class NewSteperComponent {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog ) {}
  selected = new FormControl(1);

 


  Newdelete(): void {
    const deletepopupconst = this.dialog.open(DeletePopupSteprComponent, {
      width: '50%',
      data: {},
    })
  }

}
