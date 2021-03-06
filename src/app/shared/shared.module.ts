import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {PilotService} from './services/pilot.service';
import { CardCategoriesComponent } from './components/card-categories/card-categories.component';
import { IonicModule } from '@ionic/angular';
import { ListModalComponent } from './components/list-modal/list-modal.component';
import { CardPilotsComponent } from './components/card-pilots/card-pilots.component';
import { CardFlightComponent } from './components/card-flight/card-flight.component';
import { CardParagliderComponent } from './components/card-paraglider/card-paraglider.component';
import { CardSiteComponent } from './components/card-site/card-site.component';



@NgModule({
  declarations: [
    CardCategoriesComponent, 
    ListModalComponent, 
    CardPilotsComponent, 
    CardFlightComponent, 
    CardParagliderComponent, 
    CardSiteComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule
  ],
  providers: [PilotService],
  exports: [
    HttpClientModule, 
    CardCategoriesComponent, 
    ListModalComponent, 
    CardPilotsComponent,
    CardFlightComponent,
    CardParagliderComponent,
    CardSiteComponent
  
  ],
  entryComponents: [ListModalComponent]
})
export class SharedModule { }
