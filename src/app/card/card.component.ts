import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public cardTitles: string[];  // put card titles in a service

  constructor() {
    this.cardTitles = ['title1', 'title2', 'title3'];
  }

  ngOnInit() {
  }

}
