import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInterviewerComponent } from './add-interviewer/add-interviewer.component';
import { DeleteInterviewerComponent } from './delete-interviewer/delete-interviewer.component';
import { GetInterviewerComponent } from './get-interviewer/get-interviewer.component';
import { ListInterviewerComponent } from './list-interviewer/list-interviewer.component';
import { UpdateInterviewerComponent } from './update-interviewer/update-interviewer.component';



@NgModule({
  declarations: [
    AddInterviewerComponent,
    DeleteInterviewerComponent,
    GetInterviewerComponent,
    ListInterviewerComponent,
    UpdateInterviewerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterviewerModule { }
