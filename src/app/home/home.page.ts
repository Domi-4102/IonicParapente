// import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Categories } from '../shared/models/categories';
import { ListModalComponent } from '../shared/components/list-modal/list-modal.component';
import { PilotService } from '../shared/services/pilot.service';
import { FlightService } from '../shared/services/flight.service';
import { FlightMapping } from '../shared/mapping/flightMapping';
import { PilotMapping } from '../shared/mapping/pilotMapping';
import { Component } from '@angular/core';
import { ParagliderService } from '../shared/services/paraglider.service';
import { ParagliderMapping } from '../shared/mapping/paragliderMapping';
import { SiteMapping } from '../shared/mapping/siteMapping';
import { SiteService } from '../shared/services/site.service';


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
                                "Name": "pilot's flight",
                              }, { 
                                "id": 3,
                                "Name": "paraglider",
                              }, { 
                                "id": 4,
                                "Name": "site",
                              }
];

  constructor(
    private modalController: ModalController,
    private piloteService: PilotService,
    private flightService: FlightService,
    private paragliderService: ParagliderService,
    private siteService: SiteService
    ) 
    {

    }

  async openModal(item: any) {
    console.log(item);
    let { service, items } = this.SelectServices(item);

    service.subscribe(async (data: any[]) => {

      items = this.MapItemsToEntities(data, item, items);
     
      await this.ConfigureModal(item, items);

      this.modal.onclose = (e:any) => {
        this.modal.dismiss();
      }

      this.modal.present();
    })
    
  }



  private async ConfigureModal(item: any, items: any[]) {
    this.modal = await this.modalController.create({
      component: ListModalComponent,
      swipeToClose: true,
      componentProps: {
        name: item.Name,
        items
      }
    });
  }

  private SelectServices(item: any) {
    let service = null;
    let items = [];
    switch (item.Name) {
      case 'pilot': {
        service = this.piloteService.getPilots$();
        break;
      }
      case 'pilot\'s flight': {
        service = this.flightService.getFlights$();
        break;
      }
      case 'paraglider': {
        service = this.paragliderService.getParagliders$();
        break;
      }
      case 'site': {
        service = this.siteService.getSites$();
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
    return { service, items };
  }

  private MapItemsToEntities(data: any[], item: any, items: any[]) {
    console.log(data);
    switch (item.Name) {
      case 'pilot': {
        items = data.map(PilotMapping.mapPilotToList);
        break;
      }
      case 'pilot\'s flight': {
        items = data.map(FlightMapping.mapFlightToList);
        break;
      }
      case 'paraglider': {
        items = data.map(ParagliderMapping.mapParagliderToList);
        break;
      }
      case 'site': {
        items = data.map(SiteMapping.mapSiteToList);
        break;
      }
      default: {
        console.log("Invalid choice");
        break;
      }
    }
    return items;
  }
}
