import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRecruiterComponent } from './add-recruiter/add-recruiter.component';
import { DeleteRecruiterComponent } from './delete-recruiter/delete-recruiter.component';
import { ListRecruiterComponent } from './list-recruiter/list-recruiter.component';
import { UpdateRecruiterComponent } from './update-recruiter/update-recruiter.component';
import { GetRecruiterComponent } from './get-recruiter/get-recruiter.component';



@NgModule({
  declarations: [
    AddRecruiterComponent,
    DeleteRecruiterComponent,
    ListRecruiterComponent,
    UpdateRecruiterComponent,
    GetRecruiterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecruiterModule { }
