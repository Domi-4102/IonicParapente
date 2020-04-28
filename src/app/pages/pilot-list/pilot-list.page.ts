import { Component, OnInit } from '@angular/core';
import { PilotService } from '../../shared/services/pilot.service';
import { Pilot } from '../../shared/models/pilot';

@Component({
  selector: 'app-pilot-list',
  templateUrl: './pilot-list.page.html',
  styleUrls: ['./pilot-list.page.scss'],
})
export class PilotListPage implements OnInit {
  pilots: Pilot[] = [];
  constructor(private pilotService:PilotService) { }

  ngOnInit() {
    
  }

  ionViewDidEnter() {
    this.pilotService.getPilots$().subscribe(data => this.pilots = data);
  }

}
