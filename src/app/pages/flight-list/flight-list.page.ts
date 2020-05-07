import { Component, OnInit } from '@angular/core';
import { Flight } from '../../shared/models/flight';
import { FlightService } from '../../shared/services/flight.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.page.html',
  styleUrls: ['./flight-list.page.scss'],
})
export class FlightListPage implements OnInit {
  
  flights: Flight[] = [];
  constructor(private flightService:FlightService) { }
  
  ngOnInit() {
    
  }
  
  ionViewDidEnter() {
    this.flightService.getFlights$().subscribe(data => this.flights = data);
  }

}
  