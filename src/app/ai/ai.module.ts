import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AIRoutingModule } from './ai-routing.module';
import { AiContentComponent } from './ai-content/ai-content.component';
import { HomeModule } from '../home/home.module';
import { MaterialModule } from '../material/material.module';
import { GeneratedpopupComponent } from './ai-content/generatedpopup/generatedpopup.component';
import { ContentpopupComponent } from './ai-content/contentpopup/contentpopup.component';


@NgModule({
  declarations: [
    AiContentComponent,
    GeneratedpopupComponent,
    ContentpopupComponent
  ],
  imports: [
    CommonModule,
    AIRoutingModule,
    HomeModule,
    MaterialModule
  ]
})
export class AIModule { }
