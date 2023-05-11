import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSubmissionComponent } from './add-submission/add-submission.component';
import { GetSubmissionComponent } from './get-submission/get-submission.component';
import { UpdateSubmissionComponent } from './update-submission/update-submission.component';
import { ListSubmissionComponent } from './list-submission/list-submission.component';
import { DeleteSubmissionComponent } from './delete-submission/delete-submission.component';
import { SubmissionRoutingModule } from './submission-routing.module';

@NgModule({
  declarations: [
    AddSubmissionComponent,
    GetSubmissionComponent,
    UpdateSubmissionComponent,
    ListSubmissionComponent,
    DeleteSubmissionComponent,
  ],
  imports: [CommonModule, SubmissionRoutingModule],
})
export class SubmissionModule {}
