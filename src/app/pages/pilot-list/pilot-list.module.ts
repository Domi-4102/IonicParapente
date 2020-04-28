import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PilotListPageRoutingModule } from './pilot-list-routing.module';

import { PilotListPage } from './pilot-list.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PilotListPageRoutingModule,
    SharedModule
  ],
  declarations: [PilotListPage]
})
export class PilotListPageModule {}
