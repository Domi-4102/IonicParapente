import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PilotService} from './services/pilot.service';
import { CardCategoriesComponent } from './components/card-categories/card-categories.component';
import { IonicModule } from '@ionic/angular';
import { ListModalComponent } from './components/list-modal/list-modal.component';



@NgModule({
  declarations: [CardCategoriesComponent, ListModalComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [PilotService],
  exports: [HttpClientModule, CardCategoriesComponent, ListModalComponent],
  entryComponents: [ListModalComponent]
})
export class SharedModule { }
