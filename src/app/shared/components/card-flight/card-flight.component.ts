import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Flight } from '../../models/flight';
import { FlightService } from '../../services/flight.service';

@Component({
  selector: 'app-card-flight',
  templateUrl: './card-flight.component.html',
  styleUrls: ['./card-flight.component.css']
})
export class CardFlightComponent implements OnInit {
  @Input('item') item: Flight
  @Output('selectItem') selectItemEvent = new EventEmitter<any>();
  constructor(private flightService: FlightService) { }

  ngOnInit() {
  }
  
  cardSelect() {
    this.selectItemEvent.emit(this.item);
  }

}
