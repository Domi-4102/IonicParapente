import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';
import { Categories } from '../../models/categories';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent implements OnInit {
  @Input('item') item: Categories;
  @Output('selectItem') selectItemEvent = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  cardSelect() {
    this.selectItemEvent.emit(this.item);
  }


}
