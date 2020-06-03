import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Pilot } from '../../models/pilot';
import { PilotService } from '../../services/pilot.service';

@Component({
  selector: 'app-card-pilots',
  templateUrl: './card-pilots.component.html',
  styleUrls: ['./card-pilots.component.scss'],
})
export class CardPilotsComponent implements OnInit {
  @Input('item') item: Pilot
  @Output('selectItem') selectItemEvent = new EventEmitter<any>();
  
  constructor(private pilotService: PilotService) { }

  ngOnInit() {
  }

  cardSelect() {
    this.selectItemEvent.emit(this.item);
  }
}
