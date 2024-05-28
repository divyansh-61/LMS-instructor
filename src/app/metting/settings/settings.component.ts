import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactStudentPopupComponent } from '../contact-student-popup/contact-student-popup.component';
import { FinishMeetingtPopupComponent } from '../finish-meetingt-popup/finish-meetingt-popup.component';
import { ClearAllPopupComponent } from '../clear-all-popup/clear-all-popup.component';
import { AddtimePopupComponent } from '../addtime-popup/addtime-popup.component';


export interface PeriodicElement {
  seller: any;
  orderId: any;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    },
    orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person"
    }
  },

  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      // text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      // text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      // text3: "06:30PM-07:30PM Both",
    }
  },
  {
    seller: {
      text: 'Saturday ',
      Text: "3 Hours Available",
    }, orderId: {
      text: '10:00AM-11:30AM Both',
      text2: "12:15PM-01:45PM In-person",
      text3: "06:30PM-07:30PM Both",
    }
  },



];


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  


  displayedColumns: string[] = ['seller', 'orderId', 'date'];
  dataSource = ELEMENT_DATA;


  constructor(public dialog: MatDialog) { }

  ClearAllPopup(): void {

    const ClearAllPopup = this.dialog.open(ClearAllPopupComponent, {
      width: '40%'
    })
  }
  AddtimePopup(): void {

    const ClearAllPopup = this.dialog.open(AddtimePopupComponent, {
      width: '75%'
    })
  }
  ContactStudentPopup(): void {

    const ContactStudentPopup = this.dialog.open(ContactStudentPopupComponent, {
      width: '40%'
    })
  }
  FinishMeetingtPopup(): void {

    const FinishMeetingtPopup = this.dialog.open(FinishMeetingtPopupComponent, {
      width: '40%'
    })
  }

  isOn = true;
}
