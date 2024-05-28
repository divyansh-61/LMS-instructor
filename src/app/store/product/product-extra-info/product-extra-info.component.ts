import { Component } from '@angular/core';

@Component({
  selector: 'app-product-extra-info',
  templateUrl: './product-extra-info.component.html',
  styleUrls: ['./product-extra-info.component.css']
})
export class ProductExtraInfoComponent {

  selected="All";
  selected1="All";
  selected2="All";

  isShowNewPlan: boolean = false;
  toggleProductExtraInfo2(){
    this.isShowNewPlan = !this.isShowNewPlan
  }

}
