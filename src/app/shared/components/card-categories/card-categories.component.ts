import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent implements OnInit {
  categories : Categories[] = [{
                                  "id": 1,
                                  "Name": "pilot",
                              }, {
                                  "id": 2,
                                  "Name": "flight",
                                  
                              }];
  constructor() { }

  ngOnInit() {
  }

}
