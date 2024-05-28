import { Component } from '@angular/core';

@Component({
  selector: 'app-click-view-followers',
  templateUrl: './click-view-followers.component.html',
  styleUrls: ['./click-view-followers.component.css']
})
export class ClickViewFollowersComponent {
  displayedColumns: string[] = ['filePath'];
  dataSource_one= TABLEDATA;
}
export interface PeriodicElement {
  fileName: string;
  fileName2: string;
  filePath: string;
}

const TABLEDATA: PeriodicElement[] = [
  {
    filePath: 'assets/upcomingcourses/indoor-portrait-bearded-young-man-with-trendy-hairstyle 1.png', fileName: 'Robert Ransdell', fileName2: '28 Feb 2023 02:35'
 },
  {
    filePath: 'assets/upcomingcourses/Mask group.png', fileName: 'Robert Ransdell', fileName2: '28 Feb 2023 02:35'
  },
  {
    filePath: 'assets/upcomingcourses/Mask group (1).png', fileName: 'Robert Ransdell', fileName2: '28 Feb 2023 02:35'
  },

];
