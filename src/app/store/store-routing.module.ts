import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProductComponent } from './new-product/new-product.component';
import { AllbtnComponent } from './allbtn/allbtn.component';
import { NewbasicinformationComponent } from './newbasicinformation/newbasicinformation.component';
import { NewextrainformationComponent } from './newextrainformation/newextrainformation.component';
import { ProductStepperComponent } from './product/product-stepper/product-stepper.component';
import { ProductComponent } from './product/product.component';
import { ExtrainfotoggleComponent } from './extrainfotoggle/extrainfotoggle.component';
import { AddnewdeletpopupComponent } from './addnewdeletpopup/addnewdeletpopup.component';

import { SpecificationsComponent } from './specifications/specifications.component';
import { MessageToReviewerComponent } from './message-to-reviewer/message-to-reviewer.component';
import { SalesComponent } from './sales/sales.component';
import { SalestrackingpopupComponent } from './salestrackingpopup/salestrackingpopup.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { ProductCommentsComponent } from './product-comments/product-comments.component';
import { MycommentsComponent } from './mycomments/mycomments.component';
import { NewimagesComponent } from './newimages/newimages.component';
import { NewaddfilepopupComponent } from './newaddfilepopup/newaddfilepopup.component';
import { NewdeletesuccessComponent } from './newdeletesuccess/newdeletesuccess.component';


const routes: Routes = [
  {
    path : '', redirectTo : 'new-product', pathMatch : 'full'
 },
  {
    path: 'new-product', component: NewProductComponent
  },

  {
    path: 'btn', component: AllbtnComponent
  },

  {
    path: 'basicimformation', component: NewbasicinformationComponent
  },

  {
    path: 'extraimformation', component: NewextrainformationComponent
  },

  {
    path: 'products', component: ProductComponent
  },

  {
    path: 'product-edit', component: ProductStepperComponent
  },

  {
    path:'extraimfortoggle',component:ExtrainfotoggleComponent
  },
  {
    path:'images',component:NewimagesComponent
  },
  {
    path:'addnew',component:NewaddfilepopupComponent
  },
  {
    path:'addnewdelet',component:AddnewdeletpopupComponent
  },
  {
    path:'deletesucess',component:NewdeletesuccessComponent
  },
  {
    path:'specification',component:SpecificationsComponent
  },
  {
    path:'messagereview',component:MessageToReviewerComponent
  },
  {
    path:'sales',component:SalesComponent
  },
  {
    path:'salestrackpopup',component:SalestrackingpopupComponent
  },
  {
    path:'mypurchase',component:MyPurchasesComponent
  },
  {
    path:'productcomments',component:ProductCommentsComponent
  },
  {
    path:'mycomments',component:MycommentsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
