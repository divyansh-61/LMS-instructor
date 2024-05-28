import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-req-sucess',
  templateUrl: './req-sucess.component.html',
  styleUrls: ['./req-sucess.component.css']
})
export class ReqSucessComponent {
  constructor(public success:MatDialog){}

  successOpen() :void {
    const successOne=this.success.open(ReqSucessComponent,{width:'40%'})
  }

  successClose() :void {
    const successOne=this.success.closeAll();
  }

}
