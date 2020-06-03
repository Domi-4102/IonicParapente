import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent implements OnInit {
  @Input('name') name ="";
  @Input('items') items = [];
  
  constructor(private modalCtrl: ModalController) { 
    
  }

  ngOnInit() {
    
  }
  
  
  CloseModal() {
    
    this.modalCtrl.dismiss().then(()=>{ this.modalCtrl = null; });
  }

}
