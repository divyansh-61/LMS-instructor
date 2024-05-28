import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewdeleteComponent } from '../newdelete/newdelete.component';
@Component({
  selector: 'app-new-steper-upcome',
  templateUrl: './new-steper-upcome.component.html',
  styleUrls: ['./new-steper-upcome.component.css']
})
export class NewSteperUpcomeComponent {
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
    const deletepopupconst = this.dialog.open(NewdeleteComponent, {
      width: '50%',
      data: {},
    })
  }
}
