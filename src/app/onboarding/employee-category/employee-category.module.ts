import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeCategoryComponent } from './add-employee-category/add-employee-category.component';
import { DeleteEmployeeCategoryComponent } from './delete-employee-category/delete-employee-category.component';
import { ListEmployeeCategoryComponent } from './list-employee-category/list-employee-category.component';
import { UpdateEmployeeCategoryComponent } from './update-employee-category/update-employee-category.component';
import { GetEmployeeCategoryComponent } from './get-employee-category/get-employee-category.component';
import { EmployeeCategoryRoutingModule } from './employee-category-routing.module';

@NgModule({
  declarations: [
    AddEmployeeCategoryComponent,
    DeleteEmployeeCategoryComponent,
    ListEmployeeCategoryComponent,
    UpdateEmployeeCategoryComponent,
    GetEmployeeCategoryComponent,
  ],
  imports: [CommonModule, EmployeeCategoryRoutingModule],
})
export class EmployeeCategoryModule {}
