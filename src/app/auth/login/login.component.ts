import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import {
//   SearchCountryField,
//   CountryISO,
//   PhoneNumberFormat,
// } from 'ngx-intl-tel-input';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  selectedButton: string = 'email'; // 'email or phone'
  setSelectedButton(buttonType: string) {
    this.selectedButton = buttonType;
  }
  studentbtn: string = 'student'; // studen organazation / instruction
  setStudentbtn(buttonType: string) {
    this.studentbtn = buttonType;
  }
}
