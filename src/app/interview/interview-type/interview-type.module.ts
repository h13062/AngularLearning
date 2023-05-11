import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateInterviewTypeComponent } from './update-interview-type/update-interview-type.component';
import { AddInterviewTypeComponent } from './add-interview-type/add-interview-type.component';
import { DeleteInterviewTypeComponent } from './delete-interview-type/delete-interview-type.component';
import { GetInterviewTypeComponent } from './get-interview-type/get-interview-type.component';
import { ListInterviewTypeComponent } from './list-interview-type/list-interview-type.component';



@NgModule({
  declarations: [
    UpdateInterviewTypeComponent,
    AddInterviewTypeComponent,
    DeleteInterviewTypeComponent,
    GetInterviewTypeComponent,
    ListInterviewTypeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterviewTypeModule { }
