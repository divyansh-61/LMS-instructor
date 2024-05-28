import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-coruse-mycc-report',
  templateUrl: './coruse-mycc-report.component.html',
  styleUrls: ['./coruse-mycc-report.component.css']
})
export class CoruseMyccReportComponent {
  constructor(public dialog: MatDialog) { }

  close_PopUp(): void {

    const dialogclose = this.dialog.closeAll()
  }
}
