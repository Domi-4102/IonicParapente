import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Site } from '../../models/site';
import { SiteService } from '../../services/site.service';

@Component({
  selector: 'app-card-site',
  templateUrl: './card-site.component.html',
  styleUrls: ['./card-site.component.css']
})
export class CardSiteComponent implements OnInit {
  @Input('item') item: Site
  @Output('selectItem') selectItemEvent = new EventEmitter<any>();
  siteDescription : string;
  constructor(private pilotService: SiteService) { }

  ngOnInit() {
    this.siteDescription=this.item.siteType == 1? "TakeOff":"Landing";
  }
  cardSelect() {
    this.selectItemEvent.emit(this.item);
  }
}
