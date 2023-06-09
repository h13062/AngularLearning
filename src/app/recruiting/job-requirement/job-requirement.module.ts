import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobRequirementComponent } from './add-job-requirement/add-job-requirement.component';
import { GetJobRequirementComponent } from './get-job-requirement/get-job-requirement.component';
import { UpdateJobRequirementComponent } from './update-job-requirement/update-job-requirement.component';
import { ListJobRequirementComponent } from './list-job-requirement/list-job-requirement.component';
import { DeleteJobRequirementComponent } from './delete-job-requirement/delete-job-requirement.component';
import { JobRequirementRoutingModule } from './job-requirement-routing.module';

@NgModule({
  declarations: [
    AddJobRequirementComponent,
    GetJobRequirementComponent,
    UpdateJobRequirementComponent,
    ListJobRequirementComponent,
    DeleteJobRequirementComponent,
  ],
  imports: [CommonModule, JobRequirementRoutingModule],
})
export class JobRequirementModule {}
