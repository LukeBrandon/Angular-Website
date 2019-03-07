import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // create a cards service that pulls all of the data that goes on the cards from
  // the cards service on both the title and the
  @Input() title: string;
  description = 'test description';
  // description should be gotten from the service based on name or some ID

  constructor() {
  }

  ngOnInit() {
  }

}
