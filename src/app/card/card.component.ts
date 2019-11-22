import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  name;
  Prenom;
  Job;
  Image = 'assets/images/rotating_card_thumb.png';
  Citation;
  travail;
  mctravail;
  constructor() { }

  ngOnInit() {
  }

}
