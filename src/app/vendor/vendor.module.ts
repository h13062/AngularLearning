import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { LoginComponent } from './login/login.component';
import { AccessForbiddenComponent } from './access-forbidden/access-forbidden.component';


@NgModule({
  declarations: [
    VendorListComponent,
    AddVendorComponent,
    LoginComponent,
    AccessForbiddenComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
