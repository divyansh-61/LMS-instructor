import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { MaterialModule } from '../material/material.module';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { SettingAboutComponent } from './setting-about/setting-about.component';
import { SettingImagesComponent } from './setting-images/setting-images.component';
import { SettingStepperComponent } from './setting-stepper/setting-stepper.component';
import { SettingEducationComponent } from './setting-education/setting-education.component';
import { NewEducationPopupComponent } from './setting-education/new-education-popup/new-education-popup.component';
import { EditEducationPopupComponent } from './setting-education/edit-education-popup/edit-education-popup.component';
import { AddedsuccessfullyComponent } from './setting-education/addedsuccessfully/addedsuccessfully.component';
import { EducationRemoveItemComponent } from './setting-education/education-remove-item/education-remove-item.component';
import { EducationRemoveAccountComponent } from './setting-education/education-remove-account/education-remove-account.component';
import { SettingExperiencesComponent } from './setting-experiences/setting-experiences.component';
import { SettingSkillComponent } from './setting-skill/setting-skill.component';
import { SettingIdentityAndFinancialComponent } from './setting-identity-and-financial/setting-identity-and-financial.component';
import { SettingZoomApiComponent } from './setting-zoom-api/setting-zoom-api.component';
import { SettingExtraInfoComponent } from './setting-extra-info/setting-extra-info.component';
import { NewExperienceComponent } from './setting-experiences/new-experience/new-experience.component';
import { EditExperienceComponent } from './setting-experiences/edit-experience/edit-experience.component';
import { RemoveExperienceComponent } from './setting-experiences/remove-experience/remove-experience.component';
import { RemoveSuccessfullyComponent } from './setting-experiences/remove-successfully/remove-successfully.component';



@NgModule({
  declarations: [
 BasicInfoComponent,
 SettingAboutComponent,
 SettingImagesComponent,
 SettingStepperComponent,
 SettingEducationComponent,
 NewEducationPopupComponent,
 EditEducationPopupComponent,
 AddedsuccessfullyComponent,
 EducationRemoveItemComponent,
 EducationRemoveAccountComponent,
 SettingExperiencesComponent,
 SettingSkillComponent,
 SettingIdentityAndFinancialComponent,
 SettingZoomApiComponent,
 SettingExtraInfoComponent,
 NewExperienceComponent,
 EditExperienceComponent,
 RemoveExperienceComponent,
 RemoveSuccessfullyComponent,

  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    MaterialModule
    
  ]
})
export class SettingModule { }
