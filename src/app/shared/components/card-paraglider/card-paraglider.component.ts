import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Paraglider } from '../../models/paraglider';
import { ParagliderService } from '../../services/paraglider.service';

@Component({
  selector: 'app-card-paraglider',
  templateUrl: './card-paraglider.component.html',
  styleUrls: ['./card-paraglider.component.css']
})
export class CardParagliderComponent implements OnInit {
  @Input('item') item: Paraglider
  @Output('selectItem') selectItemEvent = new EventEmitter<any>();
  constructor(private paragliderService: ParagliderService) { }

  ngOnInit() {
  }
  cardSelect() {
    this.selectItemEvent.emit(this.item);
  }

}
