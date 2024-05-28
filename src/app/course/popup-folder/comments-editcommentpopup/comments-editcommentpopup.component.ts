import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsEditCommentSuccesspopupComponent } from '../comments-edit-comment-successpopup/comments-edit-comment-successpopup.component';

@Component({
  selector: 'app-comments-editcommentpopup',
  templateUrl: './comments-editcommentpopup.component.html',
  styleUrls: ['./comments-editcommentpopup.component.css']
})
export class CommentsEditcommentpopupComponent {
  constructor(public dialog: MatDialog) {}
  

  savecomment():void{
    const savec=this.dialog.open(CommentsEditCommentSuccesspopupComponent,{
      width: '40%'

    })

  }

  close_PopUp(): void {
    const dialogclose=this.dialog.closeAll();
    this.savecomment()
  }

  close_All(): void {
    const dialogclose=this.dialog.closeAll();
  }

}
