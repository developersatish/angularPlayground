import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
  :host {
    display: block;
    padding: 32px;
    border: 1px solid black;
    border-radius: 8px;
  }
  .header {
    background-color: #e3e3e3;
  }
  .side {
    background-color: #e3e3ff;
  }
  .content {
    background-color: #e3ffe3;
  }
  .footer {
    background-color: #ffe3e3;
  }
  `]
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
