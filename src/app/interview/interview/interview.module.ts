import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { DeleteInterviewComponent } from './delete-interview/delete-interview.component';
import { UpdateInterviewComponent } from './update-interview/update-interview.component';
import { GetInterviewComponent } from './get-interview/get-interview.component';



@NgModule({
  declarations: [
    ListInterviewComponent,
    AddInterviewComponent,
    DeleteInterviewComponent,
    UpdateInterviewComponent,
    GetInterviewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InterviewModule { }
