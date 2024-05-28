import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HomeModule } from "./home/home.module";
import { LoginComponent } from './auth/login/login.component';
import { RecoverypasswordComponent } from './auth/recoverypassword/recoverypassword.component';
import { SignupComponent } from './auth/signup/signup.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RecoverypasswordComponent,
        SignupComponent

    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        HomeModule,
        
    ]
})
export class AppModule { }
