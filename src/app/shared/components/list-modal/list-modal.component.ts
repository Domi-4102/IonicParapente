import { Component, OnInit, Input } from '@angular/core';

@Component({
  templateUrl: './list-modal.component.html',
  styleUrls: ['./list-modal.component.css']
})
export class ListModalComponent implements OnInit {
  @Input('items') items = [];

  constructor() { }

  ngOnInit() {
  }

  get fields(): string[] {
    const fields = [];

    for(let field in this.items[0]) {
      fields.push(field);
    }

    return fields;
  }
}
