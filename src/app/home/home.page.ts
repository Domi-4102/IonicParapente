import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { Categories } from '../shared/models/categories';
import { FlightListPage } from '../pages/flight-list/flight-list.page';
import { ListModalComponent } from '../shared/components/list-modal/list-modal.component';
import { PilotService } from '../shared/services/pilot.service';
import { FlightService } from '../shared/services/flight.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modal:any;
  
  categories : Categories[] = [{
                                  "id": 1,
                                  "Name": "pilot",
                              }, {
                                  "id": 2,
                                  "Name": "flight",
                                  
                              }];

  constructor(private modalController: ModalController, private piloteService: PilotService, private flightService: FlightService) {
    
  }

  async openModal(item: any) {
    console.log(item);
    let service = null;
    if (item.Name === 'pilot') {
      service = this.piloteService.getPilots$();
    } else {
      service = this.flightService.getFlights$();
    }
      service.subscribe(async data => {
      this.modal = await this.modalController.create({
        component: ListModalComponent,
        swipeToClose: true,
        componentProps: {
          items: data
        }
      })
  
      this.modal.onclose = (e) => {
        this.modal.dismiss();
      }
  
      this.modal.present();
    })
    
  }

}
