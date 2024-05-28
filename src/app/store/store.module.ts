import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing.module';

import { NewProductComponent } from './new-product/new-product.component';
import { MaterialModule } from '../material/material.module';
import { AllbtnComponent } from './allbtn/allbtn.component';
import { NewbasicinformationComponent } from './newbasicinformation/newbasicinformation.component';
import { NewextrainformationComponent } from './newextrainformation/newextrainformation.component';
import { ProductComponent } from './product/product.component';
import { ProductStepperComponent } from './product/product-stepper/product-stepper.component';
import { ProductBasicInfoComponent } from './product/product-basic-info/product-basic-info.component';
import { DeletePopupComponent } from './product/delete-popup/delete-popup.component';
import { SuccessDeletePopupComponent } from './product/success-delete-popup/success-delete-popup.component';
import { ProductExtraInfoComponent } from './product/product-extra-info/product-extra-info.component';
import { ProductBtnsComponent } from './product/product-btns/product-btns.component';
import { ProductExtraInfo2Component } from './product/product-extra-info2/product-extra-info2.component';
import { ProductImagesComponent } from './product/product-images/product-images.component';
import { ProductSpecificationsComponent } from './product/product-specifications/product-specifications.component';
import { ProductMessageToReviewerComponent } from './product/product-message-to-reviewer/product-message-to-reviewer.component';
import { SuccessPopupComponent } from './product/success-popup/success-popup.component';
import { ExtrainfotoggleComponent } from './extrainfotoggle/extrainfotoggle.component';
import { NewimagesComponent } from './newimages/newimages.component';
import { NewaddfilepopupComponent } from './newaddfilepopup/newaddfilepopup.component';
import { AddnewdeletpopupComponent } from './addnewdeletpopup/addnewdeletpopup.component';
import { NewdeletesuccessComponent } from './newdeletesuccess/newdeletesuccess.component';
import { SpecificationsComponent } from './specifications/specifications.component';
import { MessageToReviewerComponent } from './message-to-reviewer/message-to-reviewer.component';
import { SalesComponent } from './sales/sales.component';
import { SalestrackingpopupComponent } from './salestrackingpopup/salestrackingpopup.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { ProductCommentsComponent } from './product-comments/product-comments.component';
import { MycommentsComponent } from './mycomments/mycomments.component';


@NgModule({
  declarations: [
   
    NewProductComponent,
        AllbtnComponent,
        NewbasicinformationComponent,
        NewextrainformationComponent,
        ProductComponent,
        ProductStepperComponent,
        ProductBasicInfoComponent,
        DeletePopupComponent,
        SuccessDeletePopupComponent,
        ProductExtraInfoComponent,
        ProductBtnsComponent,
        ProductExtraInfo2Component,
        ProductImagesComponent,
        ProductSpecificationsComponent,
        ProductMessageToReviewerComponent,
        SuccessPopupComponent,
        ExtrainfotoggleComponent,
        NewimagesComponent,
        NewaddfilepopupComponent,
        AddnewdeletpopupComponent,
        NewdeletesuccessComponent,
        SpecificationsComponent,
        MessageToReviewerComponent,
        SalesComponent,
        SalestrackingpopupComponent,
        MyPurchasesComponent,
        ProductCommentsComponent,
        MycommentsComponent
        
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MaterialModule
  ]
})
export class StoreModule { }
