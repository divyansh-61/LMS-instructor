import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListmultiplepopupComponent } from '../listmultiplepopup/listmultiplepopup.component';
import { ListAddDiscriptionPopupComponent } from '../list-add-discription-popup/list-add-discription-popup.component';
import { ListclickdeletepopupComponent } from '../listclickdeletepopup/listclickdeletepopup.component';
import { ListeditsavepopupComponent } from '../listeditsavepopup/listeditsavepopup.component';

@Component({
  selector: 'app-editlist',
  templateUrl: './editlist.component.html',
  styleUrls: ['./editlist.component.css']
})
export class EditlistComponent {
  constructor(public dialog:MatDialog){}

  multipopup():void{
    const deletepopup =this.dialog.open(ListmultiplepopupComponent,{
      width:"50%",
      data:{},
    })
  }
  adddescribtionpopup():void{
    const deletepopup =this.dialog.open(ListAddDiscriptionPopupComponent,{
      width:"50%",
      data:{},
    })
  }
  deletepopup():void{

    const newref=this.dialog.open(ListclickdeletepopupComponent,{
      width: '40%'
    })
  }
  savepopup():void{

    const newref=this.dialog.open(ListeditsavepopupComponent,{
      width: '40%'
    })
  }
}
