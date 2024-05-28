import { Component } from '@angular/core';

@Component({
  selector: 'app-recoverypassword',
  templateUrl: './recoverypassword.component.html',
  styleUrls: ['./recoverypassword.component.css']
})
export class RecoverypasswordComponent {
  selectedButton: string = 'email'; // 'email or phone'
  setSelectedButton(buttonType: string) {
    this.selectedButton = buttonType;
  }

}
