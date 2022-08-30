import { trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { CardsInterface } from '../interface/cards-interface';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss']
})
export class HomeCardsComponent implements OnInit {

  @Input() data!: CardsInterface[];

  onloading: boolean = false;

  constructor() { }

  ngOnInit(): boolean {
    this.onloading = true;
    return this.onloading = true;
  }

}
