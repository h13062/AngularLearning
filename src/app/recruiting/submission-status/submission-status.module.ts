import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubmissionStatusComponent } from './add-submission-status/add-submission-status.component';
import { GetSubmissionStatusComponent } from './get-submission-status/get-submission-status.component';
import { ListSubmissionStatusComponent } from './list-submission-status/list-submission-status.component';
import { DeleteSubmissionStatusComponent } from './delete-submission-status/delete-submission-status.component';
import { UpdateSubmissionStatusComponent } from './update-submission-status/update-submission-status.component';
import { SubmissionStatusRoutingModule } from './submission-status-routing.module';

@NgModule({
  declarations: [
    AddSubmissionStatusComponent,
    GetSubmissionStatusComponent,
    ListSubmissionStatusComponent,
    DeleteSubmissionStatusComponent,
    UpdateSubmissionStatusComponent,
  ],
  imports: [CommonModule, SubmissionStatusRoutingModule],
})
export class SubmissionStatusModule {}
