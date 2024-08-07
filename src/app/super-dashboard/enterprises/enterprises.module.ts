import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnterprisesRoutingModule } from './enterprises-routing.module';
import { CreateOrEditEnterprisePageComponent } from './pages/create-or-edit-enterprise-page/create-or-edit-enterprise-page.component';
import { ListEnterprisesPageComponent } from './pages/list-enterprises-page/list-enterprises-page.component';
import { SharedModule } from '@shared/shared.module';

import { ShowEnterprisePageComponent } from './pages/show-enterprise-page/show-enterprise-page.component';


@NgModule({
  declarations: [
    CreateOrEditEnterprisePageComponent,
    ListEnterprisesPageComponent,
    ShowEnterprisePageComponent
  ],
  imports: [
    CommonModule,
    EnterprisesRoutingModule,
    SharedModule
  ]
})
export class EnterprisesModule { }
