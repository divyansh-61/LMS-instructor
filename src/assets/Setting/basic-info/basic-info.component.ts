import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteAccountComponent } from './delete-account/delete-account.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent {
  constructor(public dialog:MatDialog){}




  successfullpopup():void{

    const newref=this.dialog.open(DeleteAccountComponent,{
      width: '40%'


    })
  }



}
