import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewExperienceComponent } from './new-experience/new-experience.component';
import { EditExperienceComponent } from './edit-experience/edit-experience.component';
import { AddedsuccessfullyComponent } from '../setting-education/addedsuccessfully/addedsuccessfully.component';
import { EducationRemoveItemComponent } from '../setting-education/education-remove-item/education-remove-item.component';
import { EducationRemoveAccountComponent } from '../setting-education/education-remove-account/education-remove-account.component';

@Component({
  selector: 'app-setting-experiences',
  templateUrl: './setting-experiences.component.html',
  styleUrls: ['./setting-experiences.component.css']
})
export class SettingExperiencesComponent {

  constructor(public dialog:MatDialog){}

  addExperience():void{

        const newref=this.dialog.open(NewExperienceComponent,{
          width: '40%'
    
    
        })
      }

      closeAll():void{
        const close=this.dialog.closeAll()
      }


  addedSuccessfully():void{

    const newref=this.dialog.open(AddedsuccessfullyComponent,{
      width: '100%'


    })
  }
 editExperiencePopup():void{

    const newref=this.dialog.open(EditExperienceComponent,{
      width: '40%'


    })
  }

  DeleteItem():void{

    const newref=this.dialog.open(EducationRemoveItemComponent,{
      width: '100%'


    })
  }

  DeleteAccount():void{

    const newref=this.dialog.open(EducationRemoveAccountComponent,{
      width: '40%'


    })
  }

//   DeleteAccount():void{

//     const newref=this.dialog.open(EducationRemoveAccountComponent,{
//       width: '40%'


//     })
//   }


}
