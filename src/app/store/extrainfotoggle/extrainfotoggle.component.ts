import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-extrainfotoggle',
  templateUrl: './extrainfotoggle.component.html',
  styleUrls: ['./extrainfotoggle.component.css']
})
export class ExtrainfotoggleComponent {

  
  isShowNewPlan: boolean = false;
  toggleNewPlan() {
    this.isShowNewPlan = !this.isShowNewPlan
  }


  constructor(private router: Router,) {

  }

  toggleButtonChange(e: any) {
    if (e.checked) {
      this.router.navigate(['/store/extraimfortoggle'])
    }
  }
}
