import { Component } from '@angular/core';

@Component({
  selector: 'app-product-extra-info2',
  templateUrl: './product-extra-info2.component.html',
  styleUrls: ['./product-extra-info2.component.css']
})
export class ProductExtraInfo2Component {
  selected="All";
  selected1="All";
  selected2="All";

  isShowNewPlan: boolean = false;
  toggleProductExtraInfo(){
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
